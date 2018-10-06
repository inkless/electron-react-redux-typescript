const path = require('path');
const devConfig = require('../webpack.renderer.dev.config');

module.exports = (baseConfig, env, config) => {
  config.module.rules = devConfig.module.rules;
  config.resolve = devConfig.resolve;

  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    use: [
      require.resolve('react-docgen-typescript-loader'),
    ],
  });

  return config;
};
