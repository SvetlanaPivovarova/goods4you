/** @type {import('jest').Config} */
const config = {
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.{js,jsx}'],
  coverageDirectory: 'coverage',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/setup-tests.js'],
  transform: {
    '^.+\\.(js|jsx|tsx)$': 'babel-jest',
  },
  moduleFileExtensions: ['js', 'jsx', 'tsx', 'ts'],
  moduleNameMapper: {
    '^.+\\.svg$': 'jest-svg-transformer',
    '^.+\\.(css|scss)$': 'identity-obj-proxy',
  },
};

export default config;