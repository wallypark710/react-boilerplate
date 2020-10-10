module.exports = {
  mode: 'development',
  entry: './src/index.tsx',

  output: {
    path: __dirname + '/dist',
    filename: 'main.js'
  },

  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader'
      },
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },

  devServer: {
    contentBase: './public',
    publicPath: '/dist'
  }
};
