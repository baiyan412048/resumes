// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['nuxt-icon', '@nuxt/image', '@nuxtjs/google-fonts'],
  css: ['@/assets/base/_reset.sass'],
  app: {
    head: {
      meta: [{ name: 'theme-color', content: '#34BD32' }]
    }
  },
  googleFonts: {
    families: {
      'Concert+One': true,
      'Pirata+One': true,
      'Noto+Sans+JP': [500],
      'Noto+Serif+JP': [900]
    }
  }
})
