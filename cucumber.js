const config = {
  paths: ['src/tests/features/*.feature'],
  require: ['src/tests/step_definitions/*.ts'],
  requireModule: ['ts-node/register'],
  format: ['summary', 'progress-bar'],
  formatOptions: { snippetInterface: 'async-await' },
  publishQuiet: true,
};

module.exports = {
  default: config,
};
