import fetch from "cross-fetch";

global.fetch = fetch;

module.exports = {
    preset: "ts-jest",
    setupFilesAfterEnv: ["./jest.config.ts", "@testing-library/jest-dom"],
    testEnvironment: "jsdom",
    testMatch: ["**/src/**/*.test.(ts|tsx)"],
    testPathIgnorePatterns: ["/node_modules/", "/styles/"],
    collectCoverage: true,
    collectCoverageFrom: ["**/src/**/*.ts"],
    coverageDirectory: "coverage",
    coverageReporters: ["text", "lcov", "clover"],
    // coverageThreshold: {
    //     global: {
    //         branches: 80,
    //         functions: 80,
    //         lines: 80,
    //         statements: 80,
    //     },
    // },
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