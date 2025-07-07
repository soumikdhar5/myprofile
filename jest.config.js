module.exports = {
    setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
    testEnvironment: "jsdom",
    transform: {
      '^.+\\.jsx?$': 'babel-jest',
      '^.+\\.tsx?$': 'ts-jest',
      '^.+\\.ts$': 'ts-jest',
      '^.+\\.tsx$': 'ts-jest',
    },
    transformIgnorePatterns: ['<rootDir>/node_modules/', '\\.css$'],
    moduleNameMapper: {
      '\\.(css|less|scss|sass)$': '<rootDir>/__mocks__/styleMock.js',
      '\\.(jpg|jpeg|png|gif|webp|svg)$': '<rootDir>/__mocks__/fileMock.js',
    },
    setupFilesAfterEnv: ['@testing-library/jest-dom'],
};