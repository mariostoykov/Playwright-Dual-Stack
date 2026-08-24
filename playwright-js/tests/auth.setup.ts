import { test as setup, expect } from '@playwright/test';

const authFile = 'playwright/.auth/user.json';

setup('authenticate as standard_user', async ({ page }) => {
    await page.goto('/');
    await page.locator('[data-test="username"]').fill(process.env.SAUCE_USERNAME ?? 'standard_user');
    await page.locator('[data-test="password"]').fill(process.env.SAUCE_PASSWORD ?? 'secret_sauce');

    await page.locator('[data-test="login-button"]').click();

    // Validate successful login
    await page.waitForURL('**/inventory.html');

    // Save storage state to a local JSON file
    await page.context().storageState({ path: authFile });
});
