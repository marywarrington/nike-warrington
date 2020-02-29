const path = require('path');
const HtmlWebpackPlugin =  require('html-webpack-plugin');

module.exports = {
  entry : './src/index.js',
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
        test : /\.(js)$/,
        use:'babel-loader'
      },
      {
        test: /\.(scss|css)$/i,
        use:['style-loader', 'css-loader']
      }
    ]
  },
  mode:'development',
  plugins : [
    new HtmlWebpackPlugin ({
      template : './src/index.html'
    })
  ]
}