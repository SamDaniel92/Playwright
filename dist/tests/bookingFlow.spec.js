"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fixtures_1 = require("./fixtures");
const FlightSearchPage_1 = require("@pages/FlightSearchPage");
const testData_1 = require("@helpers/testData");
const utils_1 = require("@helpers/utils");
fixtures_1.test.describe('Flight Booking Flow @e2e @regression', () => {
    (0, fixtures_1.test)('should complete end-to-end booking flow', async ({ page }) => {
        const searchPage = new FlightSearchPage_1.FlightSearchPage(page);
        await searchPage.searchFlight(testData_1.TestData.airports.LHR, testData_1.TestData.airports.JFK, (0, utils_1.formatDate)((0, utils_1.addDaysToDate)(7)));
        // Add booking flow steps here
    });
});
