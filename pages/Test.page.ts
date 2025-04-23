import { Page } from '@playwright/test';
import { BasePage } from './base.page';
import { FlightSearchPage } from './flight-search.page';
import { selectors } from '../helpers/Objects';

export class TestPage extends FlightSearchPage {
    
    // ONE clear selector object per page combining multiple sets
    selectors = {
        ...selectors.flightSearchPage,   // Spread flightSearch selectors
        ...selectors.TestPage         // Spread Testpage selectors
    };
    
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
    async fillCardDetails(cardNumber: string, cvv: string) {
        await this.fill(this.selectors.cardNumberInput, cardNumber);
        await this.fill(this.selectors.cvvInput, cvv);
    }
    
}
