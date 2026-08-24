import os
import pytest
from playwright.sync_api import sync_playwright

AUTH_FILE = "playwright/auth.json"
SAUCE_USERNAME = os.getenv("SAUCE_USERNAME", "standard_user")
SAUCE_PASSWORD = os.getenv("SAUCE_PASSWORD", "secret_sauce")
DEFAULT_BASE_URL = os.getenv("BASE_URL", "https://www.saucedemo.com")
ENV_URLS = {
    "dev": os.getenv("DEV_BASE_URL", DEFAULT_BASE_URL),
    "staging": os.getenv("STAGING_BASE_URL", DEFAULT_BASE_URL),
    "prod": DEFAULT_BASE_URL,
}

def pytest_addoption(parser):
    parser.addoption("--env", action="store", default="prod", help="Environment to run tests against")

@pytest.fixture(scope="session")
def base_url(request):
    env_choice = request.config.getoption("--env").lower()
    return ENV_URLS.get(env_choice, ENV_URLS["prod"])

@pytest.fixture(scope="session", autouse=True)
def global_auth_setup(base_url, request):
    os.makedirs(os.path.dirname(AUTH_FILE), exist_ok=True)
    browser_name = request.config.getoption("--browser", default=["chromium"])[0]
    
    with sync_playwright() as p:
        browser_type = getattr(p, browser_name)
        browser = browser_type.launch(headless=True)
        context = browser.new_context()
        page = context.new_page()

        try:
            page.goto(base_url)
            page.locator('[data-test="username"]').fill(SAUCE_USERNAME)
            page.locator('[data-test="password"]').fill(SAUCE_PASSWORD)
            page.locator('[data-test="login-button"]').click()
            page.wait_for_url("**/inventory.html")

            context.storage_state(path=AUTH_FILE)
        finally:
            context.close()
            browser.close()

@pytest.fixture(scope="function")
def authenticated_page(browser, base_url):
    context = browser.new_context(storage_state=AUTH_FILE, base_url=base_url)
    page = context.new_page()
    yield page
    context.close()

# =====================================================================
# AUTOMATIC SCREENSHOT ON FAILURE HOOKS
# =====================================================================

@pytest.hookimpl(tryfirst=True, hookwrapper=True)
def pytest_runtest_makereport(item, call):
    """Detects test failures and attaches screenshots to the HTML report."""
    outcome = yield
    report = outcome.get_result()

    if report.when == "call" and report.failed:
        page = item.funcargs.get("page") or item.funcargs.get("authenticated_page")
        
        if page:
            os.makedirs("reports/screenshots", exist_ok=True)
            screenshot_path = f"reports/screenshots/{item.name}.png"
            
            page.screenshot(path=screenshot_path)
            
            html = getattr(report, "extra", [])
            if os.path.exists(screenshot_path):
                relative_path = f"screenshots/{item.name}.png"
                img_html = f'<div><img src="{relative_path}" alt="screenshot" style="width:600px;height:auto;" class="screenshot"/></div>'
                html.append(pytest_html.extras.html(img_html))
                report.extra = html

import pytest_html
