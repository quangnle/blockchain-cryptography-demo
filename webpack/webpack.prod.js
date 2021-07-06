const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const isWsl = require('is-wsl');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

const fs = require('fs');
const path = require('path');
const commonPaths = require('./paths');

const dirs = fs.readdirSync(commonPaths.publicPath);

const copyPluginPatterns = dirs
  .filter(dir => dir !== 'index.html')
  .map(dir => {
    return {
      from: dir,
      to: '',
      context: path.resolve('public')
    };
  });
module.exports = {
  mode: 'production',
  // Temporary workaround for 'browserslist' bug that is being patched in the near future
  target: 'browserslist',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        exclude: /(node-modules)/
      },
      {
        test: /\.(s[ac]ss|css)$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              sourceMap: false
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: false
            }
          }
        ]
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'static/media/[name].[contenthash:6].[ext]'
            }
          }
        ]
      },
      {
        test: /\.(woff2|ttf|woff|eot)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'static/fonts/[name].[ext]'
            }
          }
        ]
      }
    ]
  },
  output: {
    path: commonPaths.outputPath,
    filename: 'static/js/main.[contenthash:6].js',
    chunkFilename: 'static/js/main.[contenthash:6].js',
    publicPath: '/',
    environment: {
      arrowFunction: false,
      bigIntLiteral: false,
      const: false,
      destructuring: false,
      dynamicImport: false,
      forOf: false,
      module: false
    }
  },
  plugins: [
    new CopyPlugin({
      patterns: copyPluginPatterns
    }),
    new MiniCssExtractPlugin({
      filename: 'static/css/[name].[contenthash:6].css'
    }),
    new CleanWebpackPlugin(),
    new CompressionPlugin({
      test: /\.(css|js|html|svg)$/
    })
  ],
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        // Use multi-process parallel running to improve the build speed
        // Default number of concurrent runs: os.cpus().length - 1
        // Disabled on WSL (Windows Subsystem for Linux) due to an issue with Terser
        // https://github.com/webpack-contrib/terser-webpack-plugin/issues/21
        parallel: !isWsl
        // Enable file caching
      }),
      new CssMinimizerPlugin()
    ],
    // Automatically split vendor and commons
    // https://twitter.com/wSokra/status/969633336732905474
    // https://medium.com/webpack/webpack-4-code-splitting-chunk-graph-and-the-splitchunks-optimization-be739a861366
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true
        }
      }
    },
    // Keep the runtime chunk seperated to enable long term caching
    // https://twitter.com/wSokra/status/969679223278505985
    runtimeChunk: true
  },

  devtool: false,
  performance: {
    maxEntrypointSize: 800000
  }
};
