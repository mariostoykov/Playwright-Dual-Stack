import { defineConfig, devices } from '@playwright/test';

export const STORAGE_STATE = 'playwright/.auth/user.json';
const BASE_URL = process.env.BASE_URL ?? 'https://www.saucedemo.com';

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 4 : undefined,
  reporter: [['html', { outputFolder: 'playwright-report' }]],
  
  use: {
    baseURL: BASE_URL,
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
  },

  projects: [
    // 1. Setup project to handle authentication first
    {
      name: 'setup',
      testMatch: /auth\.setup\.ts/,
    },
    // 2. Main E2E testing projects that depend on 'setup'
    {
      name: 'chromium',
      use: { 
        ...devices['Desktop Chrome'],
        storageState: STORAGE_STATE,
      },
      dependencies: ['setup'],
    },
    {
      name: 'firefox',
      use: { 
        ...devices['Desktop Firefox'],
      storageState: STORAGE_STATE,
     },
     dependencies: ['setup'],
    },
    {
      name: 'webkit',
      use: {
        ...devices['Desktop Safari'],
        storageState: STORAGE_STATE,
      },
      dependencies: ['setup'],
    },
  ],
});
