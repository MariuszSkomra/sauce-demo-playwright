# About

Automated tests project executed on [Sauce Demo](https://www.saucedemo.com/) page.

Tests are written in Type Script with [Playwright](https://playwright.dev/) usage.

Tests are executed on Chrome browser in headless mode.

# How to run tests

## locally

To run all tests use:

```
npx playwright test
```

## on CI

Run `Run all tests` workflow.

# How to generate report

## locally

After tests run use:

```
npx playwright show-report
```

## on CI

HTML report is being published on GitHub Pages under [link](https://mariuszskomra.github.io/sauce-demo-playwright/).

It also can be open locally - download `github-pages` artifact, unarchive it and open `index.html`.
