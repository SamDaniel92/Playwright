"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FlightSearchPage = void 0;
const BasePage_1 = require("./BasePage");
class FlightSearchPage extends BasePage_1.BasePage {
    selectors = {
        origin: '#origin',
        destination: '#destination',
        dateInput: '#departure-date',
        searchButton: '#search-flights'
    };
    async searchFlight(origin, destination, date) {
        await this.type(this.selectors.origin, origin);
        await this.type(this.selectors.destination, destination);
        await this.type(this.selectors.dateInput, date);
        await this.click(this.selectors.searchButton);
    }
}
exports.FlightSearchPage = FlightSearchPage;
