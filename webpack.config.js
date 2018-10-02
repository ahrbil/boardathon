const BrowserSyncPlugin = require("browser-sync-webpack-plugin");
const WebpackBuildNotifierPlugin = require('webpack-build-notifier');

const path = require("path");

module.exports = {
  entry: "./app.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  module: {
    rules: [
      {
        test: /.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["env"]
          }
        }
      }
    ]
  },
  plugins: [
    new BrowserSyncPlugin({
      host: "localhost",
      port: 3000,
      notify: false,
      files: ["dist/*js", "dist/*css", "dist/*html"],
      server: { baseDir: ["dist"] }
    }),
    new WebpackBuildNotifierPlugin({
      title: "Webpack Watch",
      suppressSuccess: "always",
      sound: false

    })
  ]
};