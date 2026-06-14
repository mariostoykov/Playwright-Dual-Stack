import { Page, Locator } from '@playwright/test';
import { Logger } from '../utils/Logger';

export class LoginPage {
    private readonly page: Page;
    private readonly usernameInput: Locator;
    private readonly passwordInput: Locator;
    private readonly loginButton: Locator;
    private readonly errorMessage: Locator;

    constructor(page: Page) {
        this.page = page,
        this.usernameInput = page.locator('[data-test="username"]');
        this.passwordInput = page.locator('[data-test="password"]');
        this.loginButton = page.locator('[data-test="login-button"]');
        this.errorMessage = page.locator('[data-test="error"]');
    }

    async navigate(): Promise<void> {
        Logger.info('Navigating to the SauceLabs login page.');
        await this.page.goto('/'); 
    }

    async login(username: string, password: string): Promise<void> {
        Logger.info(`Attempting login sequence for user: ${username}`);
        try {
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
        Logger.info('Login sequence execution completed successfully.');
        } catch (err) {
        Logger.error(`Failed during login execution sequence for: ${username}`, err);
        throw err;
        }
    }
}