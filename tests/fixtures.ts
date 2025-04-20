import { test as base, Page } from '@playwright/test';

type TestFixtures = {
  page: Page;
};

export const test = base.extend<TestFixtures>({
  page: async ({ browser }, use) => {
    console.log('Launching browser...');
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://flightsearchui-frbcdzdbcgc5gtgw.eastus-01.azurewebsites.net/y');
    await use(page);
    await context.close();
  },
});

export { expect } from '@playwright/test';
