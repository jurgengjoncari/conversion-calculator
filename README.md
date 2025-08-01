# Converter

This project is an Angular-based, mobile-first Progressive Web Application (PWA) that provides a converter for currency and length units. The application is designed to be modular, maintainable, and scalable, utilizing Angular Material for styling and Angular Flex-Layout for responsive layouts.

## Table of Contents
- [Features](#features)
- [Usage](#usage)
- [Technology Used](#technology-used)
- [API Integration](#api-integration)
- [Running Tests](#running-tests)

## Features
- Currency conversion supporting multiple currency pairs
- Automatic detection of user's local currency
- Length conversion supporting meters, yards, and inches
- Two-way conversion for both currency and length
- Responsive design using Angular Flex-Layout
- Styled with Angular Material

## Usage
- Choose which unit you want to convert by selecting the tab.
- Enter the amount you want to convert.
- The app will automatically detect your local currency and set appropriate default conversions:
- Select different source and target currencies for currency conversion if needed.
- Select the source and target units for length conversion.
- View the conversion result instantly.

## Technology Used
- Node.js v22.4.1
- npm 6.14.6
- Angular CLI 18.1.0

## API Integration
The application uses the `exchange-rates.abstractapi.com` API for fetching currency exchange rates. You can switch to another API if needed by updating the `src/environment.ts`.

Example:
```typescript
API_URL: 'https://open.er-api.com/v6/latest';
```
To use a different API, replace the `API_URL` with the new endpoint and adjust the data handling accordingly.

## Running Tests
The project includes unit tests for the services and components. Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).
