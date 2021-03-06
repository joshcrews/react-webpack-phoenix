var webpack = require('webpack');
var path = require('path');

var env = process.env.MIX_ENV || 'dev';
var isProduction = (env === 'prod');

module.exports = {
  entry: './web/static/js/index.js',

  output: {
    path: './priv/static/js',
    filename: 'app.js'
  },


  module: {
        loaders: [
            {
              test: /\.jsx?$/,
              exclude: /(node_modules|bower_components)/,
              loader: 'babel',
              query: {
                presets: ['es2015', 'react']
              }
            }
        ]
  }
};