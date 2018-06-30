module.exports = {
  use: [
    ["@cubos/neutrino-preset-web", {
      sass: {
        includePaths: ["src/style"],
      },
    }]
  ],
  options: {
    port: 5000,
    output: "dist",
  },
};