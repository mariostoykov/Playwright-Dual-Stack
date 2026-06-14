import { Page, Locator } from '@playwright/test';

export class InventoryPage {
    private readonly page: Page;
    readonly headerTitle: Locator;

    constructor(page: Page) {
        this.page = page;
        this.headerTitle = page.locator('.title');
    }
}