import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';
import { loginScenarios } from './data/login-scenarios';

test('should successfully log in with valid credentials', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);

    await loginPage.navigate();
    await loginPage.login('standard_user', 'secret_sauce');

    await expect(inventoryPage.headerTitle).toHaveText('Products');
});

for (const scenario of loginScenarios) {
    test(`login matrix: ${scenario.name}`, async ({ page }) => {
        const loginPage = new LoginPage(page);
        const inventoryPage = new InventoryPage(page);

        await loginPage.navigate();
        await loginPage.login(scenario.username, scenario.password);

        if (scenario.success) {
            await expect(inventoryPage.headerTitle).toHaveText('Products');
        } else {
            await expect(loginPage.errorMessage).toContainText(scenario.message!);
        }
    });
}
