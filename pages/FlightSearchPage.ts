import { BasePage } from './BasePage';

export class FlightSearchPage extends BasePage {
  private selectors = {
    origin: '#flights_from',
    destination: '#destination',
    dateInput: '#departure-date',
    searchButton: '#search-flights'
  };

  async searchFlight(origin: string, destination: string, date: string) {
    await this.type(this.selectors.origin, origin);
    await this.type(this.selectors.destination, destination);
    await this.type(this.selectors.dateInput, date);
    await this.click(this.selectors.searchButton);
  }
}
