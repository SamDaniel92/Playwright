# Playwright Test Automation Framework

This framework provides automated testing capabilities for flight booking application using Playwright.

## Setup

1. Install dependencies:
```bash
npm install
```

2. Install Playwright browsers:
```bash
npx playwright install
```

## Running Tests

- Run all tests:
```bash
npm test
```

- Run E2E tests:
```bash
npm run test:e2e
```

- Run regression tests:
```bash
npm run test:regression
```

## Test Tags

- `@e2e`: End-to-end flow tests
- `@regression`: Regression test suite

## Generate Report

```bash
npm run report
```

Reports will be available in the `reports` directory.

## Build

To compile TypeScript files:
```bash
npm run build
```

This will create compiled JavaScript files in the `dist` directory.
