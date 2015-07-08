var webpack = require('webpack')
var path = require('path')

var sources = [
  path.resolve(__dirname, 'src'),
]

module.exports = {
  entry: './src/entry.js',
  output: {
    path: __dirname,
    filename: './build/bundle.js',
  },
  resolve: {
    extensions: ['', '.js', '.css']
  },
  module: {
    preLoaders: [
      { test: /\.js?$/, include: sources, loader: 'eslint' },
    ],
    loaders: [
      { test: /\.js$/, include: sources, loader: 'babel' },
      { test: /\.css$/, loader: 'style!css' },
    ],
  },
  plugins: [
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.AggressiveMergingPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
      },
    }),
  ]
}
