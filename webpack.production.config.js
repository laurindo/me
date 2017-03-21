var path = require('path');
var buildPath = path.resolve(__dirname, '', 'build');
var mainPath = path.resolve(__dirname, 'app', 'entry.js');

module.exports = {
  entry: mainPath,
  output: {
    path: buildPath,
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
        presets: ['react', 'es2015']
      }
    }]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  }
};
