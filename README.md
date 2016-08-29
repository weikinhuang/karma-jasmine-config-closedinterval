# karma-jasmine-config-closedinterval

> This package provides ClosedInterval's base JS karma config with the jasmine framework as an extensible shared config.

## Install

```sh
npm install --save-dev karma-jasmine-config-closedinterval
```

```sh
// Also install required peer dependencies
npm install --save-dev karma@1.0.0
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
