const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');
const InterpolateHtmlPlugin = require('react-dev-utils/InterpolateHtmlPlugin');
const ModuleNotFoundPlugin = require('react-dev-utils/ModuleNotFoundPlugin');

const commonPaths = require('./paths');
const getClientEnvironment = require('./env');

const publicUrl = '';
const env = getClientEnvironment(publicUrl);
module.exports = {
  entry: commonPaths.entryPath,
  resolve: {
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
      inject: true,
      template: commonPaths.templatePath,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true
      }
    }),
    new ESLintPlugin({
      extensions: ['js', 'jsx', 'ts', 'tsx'],
      fix: true,
      emitWarning: process.env.NODE_ENV !== 'production'
    }),
    new LodashModuleReplacementPlugin()

    // Generate a manifest file which contains a mapping of all asset filenames
    // to their corresponding output file so that tools can pick it up without
    // having to parse `index.html`.
  ]
};
