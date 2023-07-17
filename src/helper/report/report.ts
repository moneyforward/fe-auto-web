const report = require('multiple-cucumber-html-reporter');

report.generate({
  jsonDir: 'test-results',
  reportPath: 'test-results/reports',
  pageTitle: 'Klavis - Automation Test Results',
  reportName: 'Klavis - Automation Test Reporter',
  metadata: {
    browser: {
      name: 'chrome',
      version: '60',
    },
    device: 'Local test machine',
    platform: {
      name: 'ubuntu',
      version: '16.04',
    },
  },
});
