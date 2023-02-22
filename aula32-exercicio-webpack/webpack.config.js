/* const path = require('path') */
/* const MiniCssExtractPlugin = require('mini-css-extract-plugin') */

module.exports = {
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

/*   plugins: [
    new MiniCssExtractPlugin()
  ], */
  output: {
/*     path: path.resolve(__dirname, 'public'), */
    filename: '[name].bundle.min.js'
  }
}