const openBrowser = require('react-dev-utils/openBrowser');

const commonPaths = require('./paths');

const PORT = process.env.REACT_APP_PORT || 3000;
const host = process.env.HOST || '0.0.0.0';

module.exports = {
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.(s[ac]ss|js)$/,
        enforce: 'pre',
        use: 'import-glob'
      },
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        exclude: /(node-modules)/,
        options: {
          plugins: ['lodash'],
          presets: [
            ['@babel/preset-env', { modules: false, targets: { node: 4 } }]
          ]
        }
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              sourceMap: true
            }
          }
        ]
      },
      // {
      //   test: /\.(png|jpg|gif)$/,
      //   use: [
      //     {
      //       loader: 'file-loader',
      //       options: {
      //         name: '[path][name].[ext]'
      //       }
      //     }
      //   ]
      // },
      {
        test: /\.(s[ac]ss)$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              sourceMap: true
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true
            }
          }
        ]
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack']
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/i,
        type: 'asset/resource'
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource'
      }
    ]
  },
  output: {
    path: commonPaths.outputPath,
    filename: '[name].js',
    chunkFilename: '[name].js',
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
  devtool: 'source-map',
  devServer: {
    client: {
      overlay: {
        warnings: false,
        errors: true
      }
    },
    port: PORT,
    host,
    compress: true,
    historyApiFallback: true,
    onAfterSetupMiddleware: () => {
      openBrowser && openBrowser(`http://127.0.0.1:${PORT}/`);
    },
    onListening: function () {
      console.log('Listening on port:', PORT);
    }
  },
  performance: {
    maxEntrypointSize: 800000
  }
};
