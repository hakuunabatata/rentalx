export default {
  bail: true,

  clearMocks: true,

  coverageProvider: 'v8',

  moduleNameMapper: {
    '@modules(.*)': '<rootDir>/src/modules/$1',
    '@shared(.*)': '<rootDir>/src/shared/$1',
  },

  preset: 'ts-jest',

  rootDir: '.',

  testMatch: ['**/*.spec.ts'],
}
