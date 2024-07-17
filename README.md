# Conversion Calculator

This project is an Angular-based, mobile-first Progressive Web Application (PWA) that provides a conversion calculator for currency and length units. The application is designed to be modular, maintainable, and scalable, utilizing Angular Material for styling and Angular Flex-Layout for responsive layouts.

## Table of Contents

- [Features](#features)
- [Technology Used](#technology-used)
- [Usage](#usage)
- [API Integration](#api-integration)

## Features

- Currency conversion supporting multiple currency pairs
- Length conversion supporting meters, yards, and inches
- Two-way conversion for both currency and length
- Responsive design using Angular Flex-Layout
- Styled with Angular Material

## Technology Used

- Node.js v22.4.1
- npm 6.14.6
- Angular CLI 18.1.0

## Usage

- Choose which unit you want to convert by selecting the tab.
- Enter the amount you want to convert.
- Select the source and target currencies for currency conversion.
- Select the source and target units for length conversion.
- View the conversion result instantly.

## API Integration

The application uses the `exchange-rates.abstractapi.com` API for fetching currency exchange rates. You can switch to another API if needed by updating the `environment.ts`.

Example:
```typescript
API_URL: 'https://exchange-rates.abstractapi.com/v1/live/';
```
To use a different API, replace the `API_URL` with the new endpoint and adjust the data handling accordingly.
