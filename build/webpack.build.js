const path = require('path')
const webpack = require('webpack')
const nodeExternals = require('webpack-node-externals')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const TerserPlugin = require("terser-webpack-plugin");

const webpackConfig = {
  target: 'node',
  mode: 'production',
  entry: {
    server: path.join(__dirname, '../src/index.ts')
  },
  output: {
    filename: 'index.js',
    path: path.join(__dirname, '../dist')
  },
  module: {
    rules: [
      {
        test: /\.js|jsx$/,
        use: {
          loader: 'babel-loader'
        },
        include: path.join(__dirname, '../src')
      },
      {
        test: /\.ts?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
        include: path.join(__dirname, '../src')
      }
    ]
  },
  resolve: {
    modules: [path.join(__dirname, '../src/index.ts'), 'node_modules'],
    extensions: ['.js', '.json', '.ts'],
    alias: {
      '@': path.join(__dirname, '../src')
    }
  },
  externals: [nodeExternals()],
  plugins: [
    new CleanWebpackPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV' : JSON.stringify('production'),
      'process.env.APP_ENV' : JSON.stringify(process.env.APP_ENV),
    }),
  ],
  node: {
    global: true,
    __filename: true,
    __dirname: true,
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin()
    ],
    splitChunks: {
      cacheGroups: {
        commons: {
          name: 'commons',
          chunks: 'initial',
          minChunks: 3,
          enforce: true
        }
      }
    }
  }
}

module.exports = webpackConfig