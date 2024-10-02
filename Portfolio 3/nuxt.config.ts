export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-icon',
    '@nuxt/content',
    '@nuxtjs/apollo',
    'nuxt-simple-robots',
    '@nuxtjs/color-mode'
  ],
  runtimeConfig: {
    public: {
      baseURL: process.env.NUXT_APP_BASE_URL ? process.env.NUXT_APP_BASE_URL : process.env.PORT ? 'http://127.0.0.1:' + process.env.PORT : ''
    },
    githubToken: process.env.GH_TOKEN
  },
  content: {
    highlight: {
      theme: 'nord',
      preload: ['html', 'css', 'js', 'ts', 'json', 'bash', 'vue', 'java']
    }
  },
  apollo: {
    clients: {
      default: {
        tokenName: 'github-token',
        httpEndpoint: 'https://api.github.com/graphql'
      }
    },
  },
  app: {
    head: {
      title: 'Brandon Winger-Air | Dev Blog & Portfolio',
      meta: [
        { name: 'description', content: 'Website & Web Application development/design blog + portfolio with tools, guides, tutorial and course resources for developers' },
        { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' }
      ],
    }
  },
  site: { indexable: process.env.SEO_ENV == 'production' ? true : false }
})