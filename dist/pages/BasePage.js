"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BasePage = void 0;
class BasePage {
    constructor(page) {
        this.page = page;
    }
    async click(selector) {
        await this.page.click(selector);
    }
    async type(selector, text) {
        await this.page.fill(selector, text);
    }
    async select(selector, value) {
        await this.page.selectOption(selector, value);
    }
    async waitForElement(selector) {
        await this.page.waitForSelector(selector);
    }
}
exports.BasePage = BasePage;
