const webPreset = require("@cubos/neutrino-preset-web");

/**
 * Neutrino setup customizer
 *
 * @param {webPreset.INeutrino} neutrino
 */
module.exports = (neutrino) => {
  /**
   * @template import("@cubos/neutrino-preset-web").IPresetOptions
   */
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