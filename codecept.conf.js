const { setHeadlessWhen, setCommonPlugins } = require('@codeceptjs/configure');

// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

exports.config = {
  name: 'automacao_codeceptjs-web',
  tests: './*_test.js',
  output: './output',
  helpers: {
    WebDriver: {
      url: 'https://automationpractice.com/index.php',
      browser: 'chrome',
      waitForTimeout: 10000,
      desiredCapabilities:{
        chromeOptions:{

        }
      }
    }
  },
  include: {
    I: './steps_file.js'
  },
  bootstrap: null,
  teardown: null,
  mocha: {},
  plugins: {
    retryFailedStep: {
      enabled: true
    },
    screenshotOnFail: {
      enabled: true
    },
    wdio: {
      enabled: true,
      services: ['selenium-standalone']
    }
  }
}