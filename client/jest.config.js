module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/importJestDOM.ts"],
  moduleNameMapper: {
    ".+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$":
      "identity-obj-proxy",
  },
  moduleDirectories: ["<rootDir>/src", "node_modules"],
};

//If there will be problems with aliases in future, please try to start resolving this problem from this link
//https://www.basefactor.com/configuring-aliases-in-webpack-vs-code-typescript-jest
