import { test, expect } from '@playwright/test';
import { FlightSearchPage } from '@pages/FlightSearchPage';
import { TestData } from '@helpers/testData';
import { formatDate, addDaysToDate } from '@helpers/utils';

test.describe('Flight Search @regression', () => {
  test('should search for flights between two cities', async ({ page }) => {
    const searchPage = new FlightSearchPage(page);
    
    await searchPage.searchFlight(
      TestData.airports.LHR,
      TestData.airports.JFK,
      formatDate(addDaysToDate(7))
    );
    
    // Add assertions here
  });
});
