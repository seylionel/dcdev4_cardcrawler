const path = require('path');

module.exports = {
  entry: './src/js/script.js',
  mode: 'development',
  output: {
    pathinfo: false,
    filename: 'script.min.js',
    path: path.resolve(__dirname, 'dist/js')
  },
  optimization: {
    removeAvailableModules: false,
    removeEmptyChunks: false,
    splitChunks: false,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve(__dirname, 'src/js'),
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              [
                "@babel/env",
                {
                  "targets": {
                    "browsers": [
                      "last 2 versions",
                      "safari >= 7"
                    ]
                  }
                }
              ]
            ]
          }
        }
      }
    ]
  }
};