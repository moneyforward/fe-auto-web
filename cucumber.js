const config = {
  paths: ['src/test/features/'],
  require: ['src/support/hooks.ts', 'src/test/steps/**/*.ts'],
  requireModule: ['ts-node/register'], // ts-node/register: solve the ts-import statement error
  format: [
    'json:test-results/cucumber-report-default.json',
    'html:test-results/cucumber-report-default.html',
    'summary',
    'progress-bar',
  ],
  formatOptions: { snippetInterface: 'async-await' },
  publishQuiet: true,
  dryRun: false,
  parallel: 2,
};

module.exports = {
  default: config,
};
