const webpack = require('webpack');

module.exports = {
  // other configurations...
  resolve: {
    fallback: {
      crypto: false,
    },
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
    new webpack.ProvidePlugin({
      Buffer: ['buffer', 'Buffer'],
    }),
  ],
};
