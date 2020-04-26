// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

/* eslint-disable */

module.exports = {
  // The directory where Jest should output its coverage files
  coverageDirectory: "coverage",

  // An array of regexp pattern strings used to skip coverage collection
  coveragePathIgnorePatterns: [
    "\\\\node_modules\\\\",
  ],

  // A list of reporter names that Jest uses when writing coverage reports
  coverageReporters: [
    //   "json",
    "text",
    //   "lcov",
    //   "clover"
  ],

  // The test environment that will be used for testing
  testEnvironment: "node",

  // An array of regexp pattern strings that are matched against all test paths, matched tests are skipped
  testPathIgnorePatterns: [
    "\\\\node_modules\\\\",
    "\\\\dist\\\\"
  ]
};
