import { test, expect } from '@playwright/test';
import { InventoryPage } from '../pages/InventoryPage';

test('should bypass logic and see inventory directly', async ({ page }) => {
    const inventoryPage = new InventoryPage(page);

    await page.goto('/inventory.html');
    await expect(inventoryPage.headerTitle).toHaveText('Products');
});