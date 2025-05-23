import { Page } from '@playwright/test';
import { BasePage } from './base.page';
import { selectors } from '../helpers/Objects';

export class FlightSearchPage extends BasePage {
    selectors = selectors.flightSearchPage;
    constructor(page: Page) {
        super(page);
    }

    async searchFlight(origin: string, destination: string, date: string) {
        await this.click(this.selectors.tripOneWay);
        await this.fill(this.selectors.originInput, origin);
        await this.fill(this.selectors.destinationInput, destination);
        await this.fill(this.selectors.dateInput, date);
        await this.click(this.selectors.searchButton);
    }

    /* async getSearchResults(): Promise<string[]> {
         const results = await this.page.$$eval('.search-result', elements =>
             elements.map(el => el.textContent || '')
         );
         return results;
     }*/
}