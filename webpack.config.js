const path = require('path');
const HtmlWebpackPlugin =  require('html-webpack-plugin');

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
      template: path.resolve(__dirname, 'src/index.html'),
      filename: './index.html'
    })
  ]
}