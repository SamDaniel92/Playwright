"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fixtures_1 = require("./fixtures");
const flight_booking_page_1 = require("../pages/flight-booking.page");
fixtures_1.test.describe('Flight Booking Flow @e2e', () => {
    let bookingPage;
    fixtures_1.test.beforeEach(async ({ page }) => {
        bookingPage = new flight_booking_page_1.FlightBookingPage(page);
        await (0, fixtures_1.expect)(page).toHaveURL(/.*\/y$/);
    });
    (0, fixtures_1.test)('should complete flight search', async ({ page }) => {
        await bookingPage.searchOneWayFlight('Mumbai', 'Delhi', '25-12-2023', '2', '1', 'Economy');
        // Verify search results
        await (0, fixtures_1.expect)(page).toHaveURL(/.*search/);
    });
});
