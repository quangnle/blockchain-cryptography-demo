const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const InterpolateHtmlPlugin = require('react-dev-utils/InterpolateHtmlPlugin');
const ModuleNotFoundPlugin = require('react-dev-utils/ModuleNotFoundPlugin');

const commonPaths = require('./paths');
const getClientEnvironment = require('./env');

const publicUrl = '';
const env = getClientEnvironment(publicUrl);
module.exports = {
  entry: commonPaths.entryPath,
  resolve: {
    // modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    extensions: ['.jsx', '.js'],
    alias: {
      '@/static': path.resolve(__dirname, '../public/static/'),
      '@': path.resolve(__dirname, '../src/')
    }
  },
  plugins: [
    new ModuleNotFoundPlugin(commonPaths.root),
    new InterpolateHtmlPlugin(HtmlWebpackPlugin, env.raw),
    new webpack.DefinePlugin(env.stringified),
    new webpack.ProgressPlugin(),
    new HtmlWebpackPlugin({
      template: commonPaths.templatePath
    }),
    new ESLintPlugin({
      extensions: ['js', 'jsx', 'ts', 'tsx'],
      fix: true,
      emitWarning: process.env.NODE_ENV !== 'production'
    })
    // Generate a manifest file which contains a mapping of all asset filenames
    // to their corresponding output file so that tools can pick it up without
    // having to parse `index.html`.
  ]
};
