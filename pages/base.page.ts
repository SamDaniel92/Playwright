import { Page, expect } from '@playwright/test';

export class BasePage {
    constructor(protected page: Page) {}

    private isXPath(selector: string): boolean {
        return selector.startsWith('//') || selector.startsWith('(//');
    }

    private async waitForElement(selector: string) {
        return this.isXPath(selector) 
            ? await this.page.waitForSelector(`xpath=${selector}`, { timeout: 10000 })
            : await this.page.waitForSelector(selector, { timeout: 10000 });
    }

    async fill(selector: string, value: string) {
        try {
            const element = await this.waitForElement(selector);
            await element.fill(value);
        } catch (error) {
            const message = error instanceof Error ? error.message : String(error);
            throw new Error(`Failed to fill ${selector} with ${value}: ${message}`);
        }
    }

    async click(selector: string) {
        try {
            const element = await this.waitForElement(selector);
            await element.click();
        } catch (error) {
            const message = error instanceof Error ? error.message : String(error);
            throw new Error(`Failed to click ${selector}: ${message}`);
        }
    }

    async isVisible(selector: string): Promise<boolean> {
        try {
            const element = await this.waitForElement(selector);
            return await element.isVisible();
        } catch (error) {
            const message = error instanceof Error ? error.message : String(error);
            throw new Error(`Failed to check visibility of ${selector}: ${message}`);
        }
    }

    async getText(selector: string): Promise<string> {
        try {
            const element = await this.waitForElement(selector);
            return await element.innerText();
        } catch (error) {
            const message = error instanceof Error ? error.message : String(error);
            throw new Error(`Failed to get text from ${selector}: ${message}`);
        }
    }
}
