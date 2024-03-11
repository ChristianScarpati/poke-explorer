module.exports = {
    preset: "ts-jest",
    setupFilesAfterEnv: ["@testing-library/jest-dom"],
    testEnvironment: "jsdom",
    testMatch: ["**/src/**/*.test.(ts|tsx)"],
    testPathIgnorePatterns: ["/node_modules/", "/styles/"],
    collectCoverage: true,
    collectCoverageFrom: ["**/src/**/*.ts"],
    coverageDirectory: "coverage",
    coverageReporters: ["text", "lcov", "clover"],
    coverageThreshold: {
        global: {
            branches: 100,
            functions: 100,
            lines: 100,
            statements: 100,
        },
    },
    verbose: true,
    moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json"],
    transformIgnorePatterns: [
        "/node_modules/",
        "^.+\\.scss$"
    ],
    moduleNameMapper: {
        "\\.(css|less|scss|sass)$": "identity-obj-proxy",
      }

}