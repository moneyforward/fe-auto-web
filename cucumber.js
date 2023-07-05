const config = {
  paths: ['tests/features/'],
  require: ['tests/support/hooks.ts', 'tests/steps/**/*.ts'],
  requireModule: ['ts-node/register'], // ts-node/register: solve the ts-import statement error
  format: [
    'json:reports/report.json',
    'html:reports/report.html',
    'summary',
    'progress-bar',
    // '@cucumber/pretty-formatter',
  ],
  formatOptions: { snippetInterface: 'async-await' },
  publishQuiet: true,
  dryRun: false,
  parallel: 1,
};

module.exports = {
  default: config,
};
