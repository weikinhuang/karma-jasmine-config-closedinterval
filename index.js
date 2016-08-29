// Karma configuration

// export a function that merges default configurations
module.exports = function(config, karmaConfig) {
  const mergeConfig = {};
  const defaultConfig = {
    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',

    //  Karma will report all the tests that are slower than given time limit (in ms)
    reportSlowerThan: 250,

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['mocha', 'coverage'],

    // mocha reporter options
    mochaReporter: {
      ignoreSkipped: true
    },

    // code coverage reporter options
    coverageReporter: {
      reporters: [
        {
          type: 'text'
        },
        {
          type: 'html',
          dir: 'coverage/'
        }
      ]
    },

    // web server port
    port: 9876,

    // enable / disable colors in the output (reporters and logs)
    colors: true,

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,

    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,

    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['PhantomJS'],

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity,

    // Cancel existing running tests if watcher is kicked off
    restartOnFileChange: true
  };

  // silence webpack output if used
  if (karmaConfig.webpack && !karmaConfig.webpackMiddleware) {
    mergeConfig.webpackMiddleware = {
      // webpack-dev-middleware configuration
      noInfo: true,
      stats: {
        colors: true,
        hash: false,
        version: false,
        timings: false,
        assets: false,
        chunks: false,
        modules: false,
        reasons: false,
        children: false,
        source: false,
        errors: true,
        errorDetails: true,
        warnings: false,
        publicPath: false
      }
    };
  }

  // require the jasmine framework
  if (!karmaConfig.frameworks) {
    karmaConfig.frameworks = [];
  }
  // frameworks to use
  // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
  karmaConfig.frameworks.push('jasmine');

  // set up files with defaults
  const files = [
    // jasmine
    require.resolve('jquery'), // jasmine-fixture requires jquery to exist
    require.resolve('jasmine-fixture/dist/jasmine-fixture'),
  ];
  // add internal helper files if requested
  const jasmineTestHelpers = karmaConfig.jasmineTestHelpers || {};
  Object.keys(jasmineTestHelpers).forEach(function(helper) {
    // filter enabled helpers
    if (!jasmineTestHelpers[helper]) {
      return;
    }
    if (!(/^[\w\-]+$/).test(helper)) {
      throw new Error('Invalid helper name: ' + helper);
    }
    try {
      files.push(require.resolve('./helpers/' + helper));
    } catch (e) {
      // empty
    }
  });
  karmaConfig.files = files.concat(karmaConfig.files);

  return Object.assign(
    {},
    defaultConfig,
    karmaConfig,
    mergeConfig
  );
};
