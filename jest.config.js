module.exports = {
  preset: 'ts-jest',
  collectionCoverageFrom: ['packages/**/*.{ts,tsx}'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/scripts/setupTest.ts'], // Optional setup file (explained later)
  transform: {
    '^.+\\.css$': 'jest-transform-css'
  }
}
