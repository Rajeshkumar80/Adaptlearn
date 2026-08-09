/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  roots: ["<rootDir>/src"],
  testMatch: ["**/__tests__/**/*.test.ts"],
  moduleFileExtensions: ["ts", "js", "json"],
  setupFiles: ["dotenv/config"],
  testTimeout: 30000,
  moduleNameMapper: {
    "^@xenova/transformers$": "<rootDir>/src/__tests__/__mocks__/transformers.ts",
  },
};
