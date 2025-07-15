const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})
module.exports = {
  transpileDependencies: [
    '@vercel/analytics'
  ],

  pwa: {
    name: 'Horario-AEG',
    themeColor: '#ffffff',
    msTileColor: '#000000',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black',
    iconPaths: {
      favicon32: 'img/icons/aeglogo.png',
      favicon16: 'img/icons/aeglogo.png',
      appleTouchIcon: 'img/icons/aeglogo.png',
      maskIcon: 'img/icons/aeglogo.png',
      msTileImage: 'img/icons/aeglogo.png'
    }
  }
};