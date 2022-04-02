module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://47.102.99.215'
      }
    }
  },
  publicPath: './'
}
