const webPreset = require("@cubos/neutrino-preset-web");

/**
 * Neutrino setup customizer
 *
 * @param {webPreset.INeutrino} neutrino
 */
module.exports = (neutrino) => {
  neutrino.use(webPreset.middleware, {
    react: {
      html: {
        title: "Projeto da Cubos",
      },
    },
    sass: {
      includePaths: ["src/style"],
    },
  });

  neutrino.options = {
    port: 5000,
    output: "dist",
  };
};