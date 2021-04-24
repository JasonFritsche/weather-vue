module.exports = {
  publicPath: '/weather-vue/',
  css: {
    loaderOptions: {
      scss: {
        additionalData: `@import "@/styles/main.scss";`,
      },
    },
  },
  transpileDependencies: ['vuetify'],
};
