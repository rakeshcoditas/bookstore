module.exports = {
    "preset" : "jest-preset-angular",
    "SetupFilesAfterEnv" : ["<rootDir>/setup-jest.ts"],
    "transformIgnorePatterens" : [
        "node_modules/(?!@ngrx|ngx-socket-io)"
    ],
    "transform": {"^.+\\.(ts|js|html)$":"ts-jest"},
    "testPathIgnorePatterens":[
        "<rootDir>/node_modules/",
        "<rootDir>/dist/",
        "<rootDir>/cypress/",
        "<rootDir>/src/test.ts/"
    ]
};