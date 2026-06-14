import { test, expect } from '@playwright/test';

test('should verify login page title', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle('Swag Labs');
});