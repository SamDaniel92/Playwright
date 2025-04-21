import { test, expect, Page } from '@playwright/test';
import { FlightSearchPage } from '../pages/flight-search.page';
import { TestData } from '../helpers/testData';

test.describe('Flight Booking @e2e', () => {
  let page: Page;
  let searchPage: FlightSearchPage;

  test.beforeEach(async ({ page: testPage }) => {
    page = testPage;
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    searchPage = new FlightSearchPage(page);
  });

  test('should complete flight search', async () => {
    await searchPage.searchFlight(
      TestData.airports.From_Loc,
      TestData.airports.To_Loc,
      '25-12-2025'
    );

    // const results = await searchPage.getSearchResults();
    // await expect(results.length).toBeGreaterThan(0);
  });
});
