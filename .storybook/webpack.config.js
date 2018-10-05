const path = require('path');
module.exports = (baseConfig, env, config) => {
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    use: [
      require.resolve('ts-loader'),
      require.resolve('react-docgen-typescript-loader'),
    ],
  });
  const svgRule = config.module.rules.find(rule => {
    return rule.test.source === '\\.svg$'
  });
  if (svgRule) {
    delete svgRule.loader;
    svgRule.use = ['@svgr/webpack', 'file-loader'];
  }

  config.resolve.extensions.push('.ts', '.tsx');
  config.resolve.alias = {
    '@src': path.resolve(__dirname, '../src'),
  };
  return config;
};
