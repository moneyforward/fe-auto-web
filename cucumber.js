const config = {
  paths: ['tests/features/*.feature'],
  require: ['tests/steps/**/*.ts'],
  requireModule: ['ts-node/register'],
  format: ['summary', 'progress-bar'],
  formatOptions: { snippetInterface: 'async-await' },
  publishQuiet: true,
  parallel: 2,
};

module.exports = {
  default: config,
};
