module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `
          @import '@/assets/fonts/fonts.scss';
          @import '@/assets/scss/settings/mixins.scss';
          @import '@/assets/scss/settings/variables.scss';
          @import '@/assets/scss/normalize/normalize.scss';
          @import '@/assets/scss/global.scss';
        `
      }
    }
  }
};
