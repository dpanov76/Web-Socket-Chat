module.exports = {
  entry: './public/js/client.js',
  output: {
    path: './public',
    filename: '/build/bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.json']
  }
};