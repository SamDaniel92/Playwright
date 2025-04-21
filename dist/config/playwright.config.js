"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = require("path");
const config = {
    testDir: path_1.default.join(__dirname, '..', 'tests'),
    timeout: 30000,
    retries: 0,
    workers: 1,
    projects: [
        {
            name: 'chromium',
            testMatch: /.*\.spec\.ts/,
            use: {
                headless: false,
                channel: 'chrome',
                viewport: null, // Set to null to allow maximize
                baseURL: 'https://flightsearchui-frbcdzdbcgc5gtgw.eastus-01.azurewebsites.net/',
                screenshot: 'only-on-failure',
                video: 'retain-on-failure',
                launchOptions: {
                    args: [
                        '--start-maximized',
                        '--window-size=1920,1080',
                        '--no-sandbox',
                        '--disable-setuid-sandbox',
                        '--disable-dev-shm-usage',
                        '--disable-gpu',
                        '--disable-software-rasterizer',
                        '--ignore-certificate-errors'
                    ],
                    slowMo: 50,
                    devtools: true, // Enable DevTools for debugging
                    timeout: 30000,
                    executablePath: process.env.CHROME_PATH // Optional: Use specific Chrome installation
                },
                trace: {
                    mode: 'on-first-retry',
                    snapshots: true
                },
                actionTimeout: 30000,
                navigationTimeout: 30000,
                contextOptions: {
                    acceptDownloads: true,
                    bypassCSP: true
                }
            },
        }
    ],
    reporter: [
        ['html', {
                outputFolder: path_1.default.join(__dirname, '..', 'reports'),
                open: 'never'
            }],
        ['list']
    ]
};
exports.default = config;
//Test
