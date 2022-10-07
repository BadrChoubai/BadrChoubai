
// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  buildModules: ['@nuxtjs/tailwindcss'],
  tailwindcss: {
      viewer: false,
  },
  head: {
    charset: 'utf-8',
    viewport: 'width=device-width, initial-scale=1',
  },
  typescript: {
    shim: false
  },
})
