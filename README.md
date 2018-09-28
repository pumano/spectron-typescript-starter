# spectron-typescript-starter
Spectron TypeScript Starter for e2e testing electron applications.

Supports:
* electron 3+ 
* Typescript 2.9.x
* Spectron 4.x (webdriverio under the hood) 

Starter use:
* `async` / `await`
* `page objects` pattern

# Project sctructure
`src` -- folder for your project's electron source code (contains electron typescript starter: https://github.com/electron/electron-quick-start-typescript)

`test` -- folder for tests

`test/helpers` -- helpers

`test/po` -- page objects

`test/specs` -- your specs (tests)

`mocha.opts` -- mocha config for test execution

`mocha-allure.opts` -- mocha config for test execution with allure reporter

# Preconditions

## install dependencies
```bash
$ npm install
```

## build electron project
```bash
$ npm run build
```

# Run tests

## run e2e tests with mocha reporter
```bash
$ npm run test:e2e
```

# Allure 

## preconditions
your need to install `allure-commandline` for using allure:
```bash
$ npm install -g allure-commandline
```

## run tests with allure reporter
```bash
$ npm run test:e2e:allure
```

## generate allure reports
```bash
$ npm run report:generate
```

## generate allure reports and open in browser
```bash
$ npm run report:generate:open
```

## clean allure reports (delete allure-report/allure-results)
```bash
$ npm run report:clean
```

# Other

## start electron project
```bash
$ npm start
```

## run typescript in watch mode (recompile on file changes)
```bash
$ npm run watch
```

# Decorators

 `@log` method decorator can be used for logging purposes

# License

This project contains electron typescript starter application (`index.html` / `src/*`)
https://github.com/electron/electron-quick-start-typescript under CC0 1.0 (Public Domain)

Other code under MIT license.


