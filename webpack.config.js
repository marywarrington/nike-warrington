const path = require('path');
const HtmlWebpackPlugin =  require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry : ['./src/index.js', './src/scss/main.scss'],
  output : {
    path : path.resolve(__dirname , 'dist'),
    filename: 'index_bundle.js'
  },
  module : {
    rules : [
      {
        test: /\.html$/i,
        loader: 'html-loader',
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.s[ac]ss$/i,
        use:['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  },
  mode:'development',
  plugins : [
    new HtmlWebpackPlugin ({
      template: path.resolve(__dirname, './src/index.html'),
      filename: 'index.html'
    }),
    /* NOTE: I'm positive the API key should not be handled like this, however, given the timeline and scope of this project (and the fact that I've never set up WebPack before and chose an API that required a key), I'm choosing to leave it here. I fully acknowledge this is not how I would do this normally. I attempted putting it in a .env file, but to no avail. Would love to learn the correct way to do this! */
    new webpack.DefinePlugin({
      'process.env.UNSPLASH_KEY': JSON.stringify('5rFSbHQe9VqXHk9zAYEpj_vZLe0IEVA7Ny22ShkaOJQ')
    })
  ]
}