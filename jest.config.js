module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'miniflare',
  moduleNameMapper: {
    '^~/(.*)$': '<rootDir>/app/$1',
  },
};
