const path = require('path')

const resolve = (dir) =>{
  return path.join(__dirname, dir)
}

module.exports = {
  publicPath: '/posvue/',
  pwa: {
    iconPaths: {
      favicon32: 'favicon.ico',
      favicon16: 'favicon.ico',
      m: 'favicon.ico'
    }
  },

  lintOnSave: true,
  chainWebpack: (config) => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('@views', resolve('src/views'))
      .set('@assets', resolve('src/assets'))
      .set('@api', resolve('src/api'))
      .set('@utils', resolve('src/utils'))

    // 为了使用方便icon图片 统一注册管理
    config.module.rule('svg').exclude.add(resolve('src/assets/svg'))
    config.module.rule('icons').test(/\.svg$/)
      .include.add(resolve('src/assets/svg')).end()
      .use('svg-sprite-loader').loader('svg-sprite-loader')
      .options({symbolId: 'icon-[name]'}).end()

  }
}
