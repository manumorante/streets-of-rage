var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var config = module.exports = {
  // the base path which will be used to resolve entry points
  context: __dirname,
  // the main entry point for our application's frontend JS
  entry: {
    application: './source/entry.js'
  }
};

config.output = {
  // this is our app/assets/javascripts directory, which is part of the Sprockets pipeline
  path: path.join(__dirname, 'assets'),
  // the filename of the compiled bundle, e.g. app/assets/javascripts/bundle.js
  filename: '[name].js'
};

config.resolve = {
  // tell webpack which extensions to auto search when it resolves modules. With this,
  // you'll be able to do `require('./utils')` instead of `require('./utils.js')`
  extensions: ['', '.js', '.jsx'],
  // by default, webpack will search in `web_modules` and `node_modules`. Because we're using
  // Bower, we want it to look in there too
  modulesDirectories: ['node_modules']
};

config.module = {
  loaders: [
    {test: /\.jsx?$/, exclude: /(node_modules)/, loader: 'babel-loader', query: {
      presets: ['es2015', 'react']
    }},
    {test: /\.scss$/, loader: ExtractTextPlugin.extract('css!sass')}
  ]
};

config.plugins = [
  new ExtractTextPlugin('application.css', {
    allChunks: true
  })
];

