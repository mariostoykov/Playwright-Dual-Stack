import pytest
from playwright.sync_api import Page, expect
from pages.inventory_page import InventoryPage

def test_authenticated_user_can_view_inventory(authenticated_page: Page):
    inventory_page = InventoryPage(authenticated_page)
    
    authenticated_page.goto("/inventory.html")
    expect(inventory_page.header_title).to_have_text("Products")
