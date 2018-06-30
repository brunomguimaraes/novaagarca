module.exports = {
  use: [
    ["@cubos/neutrino-preset-web", {
      sass: {
        includePaths: ["src/style"],
      },
    }]
  ],
};