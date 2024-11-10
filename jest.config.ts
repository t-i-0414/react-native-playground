import type { Config } from 'jest';

const config: Config = {
  preset: 'jest-expo',
  globalSetup: './jest.setup.js',
  coverageThreshold: {
    global: {
      branches: 0,
      functions: 0,
      lines: 0,
      statements: 0,
    },
  },
  collectCoverageFrom: [
    'src/**/*.{ts,tsx}',
    '!src/**/*.{test,spec,stories}.{ts,tsx}',
    '!src/app/**/*.{ts,tsx}',
    '!src/app/**/_layout.{ts,tsx}',
  ],
};

export default config;
