/**
 * Builds the DLL for development electron renderer process
 */

const webpack = require('webpack')
const path = require('path')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.base.config')
const dependencies = require('./package.json').dependencies

module.exports = merge.smart(baseConfig, {
  mode: 'development',

  devtool: 'eval',

  target: 'electron-renderer',

  entry: {
    renderer: Object.keys(dependencies || {}),
  },

  output: {
    library: '[name]_[hash]',
    filename: '[name].dll.js',
    libraryTarget: 'var',
  },

  plugins: [
    new webpack.DllPlugin({
      path: path.join(__dirname, 'dist', '[name]-manifest.json'),
      name: '[name]_[hash]',
    }),

    /**
     * Create global constants which can be configured at compile time.
     *
     * Useful for allowing different behaviour between development builds and
     * release builds
     *
     * NODE_ENV should be production so that modules do not perform certain
     * development checks
     */
    new webpack.EnvironmentPlugin({
      NODE_ENV: 'development',
    }),
  ],
})
