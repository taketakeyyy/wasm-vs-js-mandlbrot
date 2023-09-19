// const CopyWebpackPlugin = require("copy-webpack-plugin");
const { merge } = require("webpack-merge");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const src = __dirname + "/src";
const dist = __dirname + "/dist";

module.exports = {
  entry: { // ビルドの起点となるファイルの設定
    "wasm-vs-js-mandelbrot": src + "/bootstrap.js",
  },
  output: {//ビルド結果の出力場所
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js", // [name]でentryのプロパティ名になる
  },
  resolve: {  // モジュールとして扱いたいファイルの拡張子を指定する
    extensions: ['.ts', '.js', '.wasm']
  },
  devServer: {
    // webpack-dev-serverの公開フォルダ
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    compress: false,
    port: 8080,
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      minify: false,
      chunks: ["wasm-vs-js-mandelbrot"],  // 使いたいJSのentry名を指定
      filename: dist + "/wasm-vs-js-mandelbrot.html",
      template: src + "/index.html"
    }),
  ],
  module: {
    rules: [
      {   // 拡張子が.tsで終わるファイルに対して、TypeScriptコンパイラを適用する
        test: /\.ts$/,
        use: {
          loader: 'ts-loader'
        }
      },
      {   // 拡張子.scssに対して、sass-loader等を適用する
        test: /\.scss/,
        use: ["style-loader", "css-loader", "sass-loader"]  // 後ろから順に適用される
      },
    ]
  },
  experiments: {
    asyncWebAssembly: true,
    syncWebAssembly: true,
  },
};
