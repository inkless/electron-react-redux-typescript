const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')

const baseConfig = require('./webpack.base.config')

module.exports = merge.smart(baseConfig, {
  mode: 'development',

  target: 'electron-renderer',

  entry: {
    background: './src/background/index.ts',
  },

  module: {
    rules: [
      {
        test: /\.ts?$/,
        include: [path.resolve(__dirname, 'src', 'background')],
        loader: 'ts-loader',
      },
    ],
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
    }),
  ],

  output: {
    libraryTarget: 'commonjs',
  }
})
