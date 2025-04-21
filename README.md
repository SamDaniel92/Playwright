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

## Test Scenarios

### Flight Booking Tests
- One-way flight search
  - Verifies the basic flow of searching for a one-way flight
  - Includes passenger selection and travel class
  - Tagged as @e2e

## Page Objects

The framework uses Page Object Model pattern:
- `pages/flight-booking.page.ts`: Handles flight search form interactions

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
