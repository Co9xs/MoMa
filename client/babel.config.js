module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        corejs: "3",
        modules: "auto",
        useBuiltIns: "usage",
        targets: "last 1 Chrome major version",
      },
    ],
    [
      "@babel/preset-typescript",
      {
        isTSX: true,
        allExtensions: true,
      },
    ],
    [
      "@babel/preset-react",
      {
        throwIfNamespace: false,
        runtime: "automatic",
        development: process.env.BABEL_ENV === "development",
      },
    ],
  ],
};
