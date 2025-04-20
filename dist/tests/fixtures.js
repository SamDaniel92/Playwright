"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.expect = exports.test = void 0;
const test_1 = require("@playwright/test");
// Extend base test with custom fixtures
exports.test = test_1.test.extend({
    // Override default page fixture to ensure all tests start from homepage
    page: async ({ page }, use) => {
        await page.goto('/'); // Uses baseURL from playwright.config.ts
        await use(page);
    },
});
var test_2 = require("@playwright/test");
Object.defineProperty(exports, "expect", { enumerable: true, get: function () { return test_2.expect; } });
