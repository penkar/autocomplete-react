const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const htmlWebpackPlugin = new HtmlWebpackPlugin({
    template: path.join(__dirname, "examples/src/index.html"),
    filename: "./index.html"
});

module.exports = {
  entry: "./js/body.js",
  module:{
    rules:[{
      test:/\.js$/,
      use:'babel-loader'
    }]
  },
  watch:true,
  output:{
    path:path.resolve(__dirname,"dist"),
    filename:"bundle.js"
  },
  resolve: {
    extensions: [".js", ".jsx"]
  }
}
