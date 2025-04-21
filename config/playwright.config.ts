import { PlaywrightTestConfig } from '@playwright/test';
import path from 'path';

const config: PlaywrightTestConfig = {
  testDir: path.join(__dirname, '..', 'tests'),
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
        viewport: null,  // Set to null to allow maximize
        baseURL: process.env.BASE_URL || 'https://flightsearchui-frbcdzdbcgc5gtgw.eastus-01.azurewebsites.net/',
        screenshot: 'only-on-failure',
        video: 'off', // Changed from 'retain-on-failure' to 'off'
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
          devtools: false, // Changed from true to false
          timeout: 30000
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
      outputFolder: path.join(__dirname, '..', 'reports'),
      open: 'never'
    }],
    ['list']
  ]
};

export default config;
