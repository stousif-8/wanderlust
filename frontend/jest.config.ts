// jest.config.ts
export default {
  rootDir: '.', // Change this to the root of the project
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.tsx?$': [
      'ts-jest',
      {
        diagnostics: {
          ignoreCodes: [1343],
        },
        astTransformers: {
          before: [
            {
              path: 'node_modules/ts-jest-mock-import-meta',
              options: {
                metaObjectReplacement: {
                  env: {
                    VITE_API_PATH: 'http://localhost:3001',
                  },
                },
              },
            },
          ],
        },
      },
    ],
  },
  moduleNameMapper: {
    '\\.(gif|ttf|eot|svg|png|webp)$': '<rootDir>/config/jest/file-mock.ts',
    '^.+\\.(css|less|scss|sass)$': '<rootDir>/config/jest/style-mock.ts',
    '@/(.*)$': '<rootDir>/$1',
  },
  setupFilesAfterEnv: ['./config/jest/setup-tests.ts'],
  moduleFileExtensions: [
    'tsx',
    'ts',
    'web.js',
    'js',
    'web.ts',
    'web.tsx',
    'json',
    'web.jsx',
    'jsx',
    'node',
  ],
  modulePaths: ['<rootDir>/src'],
  collectCoverage: true,
  coverageDirectory: './coverage',
  coverageReporters: ['lcov', 'text'],
  collectCoverageFrom: [
    '**/*.{ts,tsx}',
    '!**/node_modules/**',
    '!**/dist/**',
  ],
};
