const config = {
  paths: ['src/features/'],
  require: ['src/support/hooks.ts', 'src/steps/**/*.ts'],
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
  parallel: 1,
};

module.exports = {
  default: config,
};
