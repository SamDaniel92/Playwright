// BasePage.ts
// ONLY implement generic page methods: click, type, select, wait
// DO NOT implement page-specific logic here
import { Page } from '@playwright/test';

export class BasePage {
  constructor(protected page: Page) {}

  async click(selector: string) {
    await this.page.click(selector);
  }

  async type(selector: string, text: string) {
    await this.page.fill(selector, text);
  }

  async select(selector: string, value: string) {
    await this.page.selectOption(selector, value);
  }

  async waitForElement(selector: string) {
    await this.page.waitForSelector(selector);
  }
}
