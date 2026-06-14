import pytest
from playwright.sync_api import Page, expect

def test_verify_logic_page_title(page: Page):  
    page.goto("/")
    expect(page).to_have_title("Swag Labs")