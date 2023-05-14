const SemiWebpackPlugin = require('@douyinfe/semi-webpack-plugin').default;

module.exports = {
  webpack: {
    plugins: {
      add: [
        new SemiWebpackPlugin({
          theme: {
            name: '@semi-bot/semi-theme-universedesign',
            include: '~@semi-bot/semi-theme-universedesign/scss/local.scss'
          }
        })
      ]
    }
  }
};
