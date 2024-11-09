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
    'src/**/*.{ts,tsx,stories.tsx}',
    '!src/**/*.{test,spec}.{ts,tsx}',
    '!src/**/index.ts',
  ],
};

export default config;
