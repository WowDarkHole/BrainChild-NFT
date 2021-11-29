const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const PrerenderSPAPlugin = require('prerender-spa-plugin')

const port = process.env.PORT || 3000;

module.exports = {
  // Webpack configuration goes here
  entry: './src/index.js',
  output: {
    filename: 'bundle.[hash].js'
  },
  plugins: [
    new PrerenderSPAPlugin({
      // Required - The path to the webpack-outputted app to prerender.
      staticDir: path.join(__dirname, 'build'),
      // Required - Routes to render.
      routes: [ '/' ],
    })
  ]
};