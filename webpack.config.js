var webpack = require('webpack');

module.exports = {
  entry: [
    //'./source/button/button.jsx',
    './source/Main.js'
  ],
  output: {
    path: __dirname,
    filename: './dist/bundle.js'
  },
  resolve: {
    root: __dirname,
    alias: {
      Button: 'source/button//button.jsx'
    },
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        test: /\.jsx?$/,
        exclude: /node_modules/
      }
    ]
  },
  devtool: 'cheap-module-eval-source-map'
};
