const path = require('path')

module.exports = {
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'dist')
    },
    compress: true,
    port: 8000
  },
  entry: {
    index: './src/index.js'
  },
  mode: 'production',
  module: {
    rules: [{
      test: /\.js$/,
      use: ['babel-loader']
            },
    {
      test: /\.css$/,
      use: ['style-loader', 'css-loader']
    }]
          },
  output: {
    filename: '[name].bundle.min.js'
  }
}