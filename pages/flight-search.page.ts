import { Page } from '@playwright/test';
import { BasePage } from './base.page';

export class FlightSearchPage extends BasePage {
    private readonly selectors = {
        Click_trip_Oneway: "(//span[text()='One-Way']/preceding::input[@type='radio'])[1]",
        Enter_origin: "//input[@placeholder='From']",
        Enter_destination: "//input[@placeholder='To']",
        enter_date: "//input[@type='date']",
        Click_searchButton: "//button[text()='Search']"
    };

    constructor(page: Page) {
        super(page);
    }

    async searchFlight(origin: string, destination: string, date: string) {
        await this.click(this.selectors.Click_trip_Oneway);
        await this.fill(this.selectors.Enter_origin, origin);
        await this.fill(this.selectors.Enter_destination, destination);
        const formattedDate = (input: string) => {
            const [dd, mm, yyyy] = input.split("-");
            return `${yyyy}-${mm}-${dd}`;
          };
          await this.fill(this.selectors.enter_date, formattedDate(date));
        await this.click(this.selectors.Click_searchButton);
    }

    async getSearchResults(): Promise<string[]> {
        const results = await this.page.$$eval('.search-result', elements =>
            elements.map(el => el.textContent || '')
        );
        return results;
    }
}