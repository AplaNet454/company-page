const path = require("path");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  mode: "production",
  entry: "./src/index.js",
  output: {
    filename: "bundle.min.js",
    path: path.resolve(__dirname, "docs"),
    clean: true,
  },
  // TO DO change afrer mock
  performance: {
    maxAssetSize: 200000000,
  },

  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
    ],
  },
  optimization: {
    minimize: true,
    minimizer: [new CssMinimizerPlugin(), new TerserPlugin({terserOptions: {
      mangle: false, // Wyłącza "mangling", czyli zmianę nazw zmiennych
      compress: {
        drop_console: false, // Opcjonalnie: usuwa console.log itp.
        passes: 1, // Używa jednego przebiegu kompresji
      },
      output: {
        beautify: false, // Nie zachowuje formatowania w wynikowym pliku
        comments: false, // Usuwa komentarze
      }
    }
  }
      ,)],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      minify: {
        collapseWhitespace: true,
      },
    }),
    new MiniCssExtractPlugin({ filename: "styles.min.css" }),
    new CopyPlugin({
      patterns: [{ from: "src/assets", to: "assets" }],
    }),
  ],
};
