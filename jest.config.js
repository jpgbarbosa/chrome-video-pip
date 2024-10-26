module.exports = {
  transform: {},
  testEnvironment: 'jest-environment-jsdom',
  moduleNameMapper: {
    '^(\\.{1,2}/.*)\\.js$': '$1',
  },
  transformIgnorePatterns: [
    'node_modules/(?!(jest-chrome)/)',
  ],
};
