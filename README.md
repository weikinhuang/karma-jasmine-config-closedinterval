# karma-jasmine-config-closedinterval

> This package provides ClosedInterval's base JS karma config with the jasmine framework as an extensible shared config.

## Install

```sh
npm install --save-dev karma-jasmine-config-closedinterval
```

```sh
// Also install required peer dependencies
npm install --save-dev jasmine@^2.4.1 jasmine-core@^2.4.1 jasmine-fixture@^2.0.0 jasmine-spec-reporter@^2.7.0 jquery@^3.1.0 karma@^1.2.0 karma-coverage@^1.1.1 karma-jasmine@^1.0.2 karma-mocha-reporter@^2.1.0 karma-phantomjs-launcher@^1.0.1 karma-sourcemap-loader@^0.3.7 karma-webpack@^1.8.0 phantomjs-prebuilt@^2.1.12 
```

## Usage

**karma.conf.js**

```js
const karmaConfigBuilder = require('karma-jasmine-config-closedinterval');
const webpackConfig = require('./webpack.config.js');

module.exports = function(config) {
  // generate from base config
  const karmaConfig = karmaConfigBuilder(config, {
    files: [
      // test entrypoint
      'test/jasmine/**/*.js'
    ],

    preprocessors: {
      'test/jasmine/**/*.js': ['webpack', 'sourcemap']
    },

    webpack: webpackConfig
  });

  config.set(karmaConfig);
};
```

## Jasmine test helpers

**karma.conf.js**

```js
{
  jasmineTestHelpers: {
    helperName: true
  }
}
```

### Helpers

TODO
