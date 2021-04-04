module.exports = {
  css: {
    loaderOptions: {
      scss: {
        additionalData: `@import "@/styles/main.scss";`,
      },
    },
  },
  transpileDependencies: ['vuetify'],
};
