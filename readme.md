# About
Automated tests project executed on [Sauce Demo](https://www.saucedemo.com/) page.

Tests are written in Type Script with [Playwright](https://playwright.dev/) usage.

Tests are executed on Chrome browser only in headless mode.

# How to run

## all test classes
```
npx playwright test
```
## single test class
```
npx playwright test /test/<testClassName>
```
## in non-headless mode
Run above commands with `--headed` flag.

# How to generate report
```
npx playwright show-report
```

# Code analysis

## prettier

To check code formatting run:

```
npm run prettierCheck
```

To format code run:

```
npm run prettierWrite
```

## eslint

To check code run:

```
npm run eslintCheck
```

This command also runs prettier.
