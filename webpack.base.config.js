const path = require('path')
const webpack = require('webpack')

module.exports = {
  context: __dirname,
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
  },
  node: {
    __dirname: false,
    __filename: false,
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.json'],
    alias: {
      '@src': path.resolve(__dirname, 'src'),
    },
  },
  devtool: 'source-map',
  plugins: [
    new webpack.ExternalsPlugin('commonjs', [
      'u2f-host-node',
      'bitcoinjs-lib',
      'devtron',
      'electron-store',
      'electron-remote',
    ]),
  ],
}
