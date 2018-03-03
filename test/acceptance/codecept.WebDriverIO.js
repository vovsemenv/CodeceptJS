const TestHelper = require('../support/TestHelper');
const eventHandlers = require('../data/sandbox/eventHandlers');

eventHandlers.init();

module.exports.config = {
  tests: './*_test.js',
  timeout: 10000,
  output: './output',
  helpers: {
    WebDriverIO: {
      url: TestHelper.siteUrl(),
      browser: 'chrome',
      host: TestHelper.seleniumHost(),
      port: TestHelper.seleniumPort(),
      desiredCapabilities: {
        chromeOptions: {
          args: ['--headless', '--disable-gpu', '--window-size=1280,1024'],
        },
      },
    },

  },
  include: {},
  bootstrap: false,
  mocha: {},
  name: 'acceptance',
};
