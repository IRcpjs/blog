const routerBase =
  process.env.DEPLOY_ENV === 'GH_PAGES' ? {
    router: {
      base: '/blog/'
    }
  } : {}
export default {
  ...routerBase,
  modules: [
    '@nuxt/content'
  ],
  content: {

  }
}
