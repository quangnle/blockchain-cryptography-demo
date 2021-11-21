const path = require('path');
const fs = require('fs');

const appDirectory = fs.realpathSync(process.cwd());

// eslint-disable-next-line no-unused-vars
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);

module.exports = {
  root: path.resolve(__dirname, '../'),
  outputPath: path.resolve(__dirname, '../', 'build'),
  publicPath: path.resolve(__dirname, '../', 'public'),
  entryPath: path.resolve(__dirname, '../', 'src/index.jsx'),
  templatePath: path.resolve(__dirname, '../', 'public/index.html'),
  appPackageJson: resolveApp('package.json'),
  dotenv: resolveApp('.env')
};
