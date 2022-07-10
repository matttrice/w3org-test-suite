module.exports = {
    // Your normal jest config settings
    testPathIgnorePatterns: ['<rootDir>/cypress/'],
    transform: {
        "^.+\\.ts$": "babel-jest"
      }
 }