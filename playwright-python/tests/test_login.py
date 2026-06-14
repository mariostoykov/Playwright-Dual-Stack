import pytest
from playwright.sync_api import Page, expect
from pages.login_page import LoginPage
from pages.inventory_page import InventoryPage

@pytest.mark.parametrize(
    "username, password, expected_status, expected_message",
    [
        # Format: (username, password, expected_status, expected_error_message_if_any)
        ("standard_user", "secret_sauce", "success", ""),
        ("locked_out_user", "secret_sauce", "fail", "Epic sadface: Sorry, this user has been locked out."),
        ("problem_user", "secret_sauce", "success", ""),
        ("performance_glitch_user", "secret_sauce", "success", ""),
        ("invalid_user", "wrong_password", "fail", "Epic sadface: Username and password do not match any user in this service")
    ]
)
def test_user_login_matrix(page: Page, username, password, expected_status, expected_message):
    """Data-driven test verifying multiple authentication states and error boundaries."""
    login_page = LoginPage(page)
    inventory_page = InventoryPage(page)

    login_page.navigate()
    login_page.login(username, password)
    
    if expected_status == "success":
        expect(inventory_page.header_title).to_have_text("Products")
    else:
        error_locator = page.locator('[data-test="error"]')
        expect(error_locator).to_contain_text(expected_message)