const path = require('path')
const fs = require('fs')
const webpack = require('webpack')
const merge = require('webpack-merge')
const { spawn, execSync } = require('child_process')

const baseConfig = require('./webpack.base.config')

const port = process.env.PORT || 1212
const publicPath = `http://localhost:${port}/dist`
const dist = path.resolve(__dirname, 'dist')
const manifest = path.resolve(dist, 'renderer-manifest.json')

/**
 * Warn if the DLL is not built
 */
if (!(fs.existsSync(dist) && fs.existsSync(manifest))) {
  console.log(
    'The DLL files are missing. Sit back while we build them for you with "npm run build:dll"'
  )
  execSync('npm run build:dll')
}

module.exports = merge.smart(baseConfig, {
  mode: 'development',

  target: 'electron-renderer',

  entry: {
    app: [
      'react-hot-loader/patch',
      `webpack-dev-server/client?http://localhost:${port}/`,
      'webpack/hot/only-dev-server',
      path.join(__dirname, 'src/renderer/index.tsx'),
    ],
  },

  output: {
    publicPath,
    filename: 'renderer.dev.js',
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        include: [path.resolve(__dirname, 'src')],
        exclude: [path.resolve(__dirname, 'src', 'main')],
        loader: 'ts-loader',
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/,
        use: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
            options: {
              bypassOnDebug: true,
            },
          },
        ],
      },
      // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'source-map-loader',
      },
    ],
  },

  plugins: [
    new webpack.DllReferencePlugin({
      context: __dirname,
      manifest: require(manifest),
      sourceType: 'var',
    }),
    new webpack.HotModuleReplacementPlugin({
      multiStep: true,
    }),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.EnvironmentPlugin({
      NODE_ENV: 'development',
    }),
  ],

  devServer: {
    port,
    publicPath,
    compress: true,
    noInfo: true,
    stats: 'errors-only',
    inline: true,
    lazy: false,
    hot: true,
    headers: { 'Access-Control-Allow-Origin': '*' },
    contentBase: path.resolve(__dirname, 'dist'),
    watchOptions: {
      aggregateTimeout: 300,
      ignored: /node_modules/,
      poll: 100,
    },
    historyApiFallback: {
      verbose: true,
      disableDotRule: false,
    },
    before() {
      if (process.env.START_HOT) {
        console.log('Starting main process')
        spawn('npm', ['run', 'start:main:dev'], {
          shell: true,
          env: process.env,
          stdio: 'inherit',
        })
          .on('close', code => process.exit(code))
          .on('error', spawnError => console.error(spawnError))
      }
    },
  },
})
