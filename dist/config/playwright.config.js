"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config = {
    testDir: '../tests',
    timeout: 60000,
    retries: 0,
    workers: 3,
    use: {
        headless: false,
        baseURL: 'https://www.youtube.com/',
        screenshot: 'only-on-failure',
        video: 'retain-on-failure',
    },
    reporter: [
        ['html', { outputFolder: '../reports' }],
        ['list']
    ],
    projects: [
        {
            name: 'Chrome',
            use: { browserName: 'chromium' }
        }
    ]
};
exports.default = config;
