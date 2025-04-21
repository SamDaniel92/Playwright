"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.expect = exports.test = void 0;
const test_1 = require("@playwright/test");
exports.test = test_1.test.extend({
    page: async ({ browser }, use) => {
        console.log('Launching browser...');
        const context = await browser.newContext();
        const page = await context.newPage();
        await page.goto('/');
        await use(page);
        await context.close();
    },
});
var test_2 = require("@playwright/test");
Object.defineProperty(exports, "expect", { enumerable: true, get: function () { return test_2.expect; } });
