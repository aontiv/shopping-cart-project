module.exports = {
    moduleNameMapper: {
        "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/src/__mocks__/file-mock.js",
        "\\.(css|less|scss)$": "<rootDir>/src/__mocks__/style-mock.js",
    }
};
