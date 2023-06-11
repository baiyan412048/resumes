// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['nuxt-icon', '@nuxt/image'],
  css: ['@/assets/base/_reset.sass'],
  app: {
    head: {
      link: [
        {
          rel: 'preconnect',
          href: 'https://fonts.googleapis.com'
        },
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com'
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Concert+One&family=Noto+Sans+JP:wght@500&family=Noto+Serif+JP:wght@900&family=Pirata+One&display=swap'
        }
      ],
      meta: [{ name: 'theme-color', content: '#34BD32' }]
    }
  }
})
