import { test, expect } from './fixtures';
import { FlightSearchPage } from '@pages/FlightSearchPage';
import { TestData } from '@helpers/testData';
import { formatDate, addDaysToDate } from '@helpers/utils';

test.describe('Flight Booking Flow @e2e @regression', () => {
  test('should complete end-to-end booking flow', async ({ page }) => {
    const searchPage = new FlightSearchPage(page);
    
    await searchPage.searchFlight(
      TestData.airports.LHR,
      TestData.airports.JFK,
      formatDate(addDaysToDate(7))
    );
    
    // Add booking flow steps here
  });
});
