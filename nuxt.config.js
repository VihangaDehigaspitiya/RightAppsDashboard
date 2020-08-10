export default {
  /*
  ** Nuxt rendering mode
  ** See https://nuxtjs.org/api/configuration-mode
  */
  mode: 'spa',
  /*
  ** Nuxt target
  ** See https://nuxtjs.org/api/configuration-target
  */
  target: 'server',
  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: process.env.npm_package_description || ''}
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'},
      {
        rel: "stylesheet",
        href: "https://stackpath.bootstrapcdn.com/bootstrap/4.5.1/css/bootstrap.min.css"
      },
      {
        rel: "stylesheet",
        href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css"
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap"
      }
    ],
    script: [
      {
        src:
          "https://code.jquery.com/jquery-3.3.1.min.js",
        type: "text/javascript"
      },
      {
        src:
          "https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js",
        type: "text/javascript"
      },
      {
        src:
          "https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js",
        type: "text/javascript"
      },
      // {
      //   src:
      //     "/js/google-map.js",
      //   type: "text/javascript"
      // },
      {
        src:
          "https://maps.googleapis.com/maps/api/js?key=AIzaSyCkoPuF252Sl33JfAny3Yq6UvCXLwVECkA",
        type: "text/javascript"
      }
    ]
  },
  /*
  ** Global CSS
  */
  css: ['@/assets/scss/main.scss'],
  /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
  plugins: [
    {src: "@/plugins/axios.js"},
    {src: "@/plugins/vue-notifications.js"},
  ],
  /*
  ** Auto import components
  ** See https://nuxtjs.org/api/configuration-components
  */
  components: true,
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [],
  /*
  ** Nuxt.js modules
  */
  modules: [
    ['nuxt-gmaps', {
      key: 'AIzaSyD0g6b9N-C14qulXwZjPcZt0u9x31_KHmw',
      //you can use libraries: ['places']
    }],
    'nuxt-socket-io'
  ],
  io: {
    // module options
    sockets: [{
      name: 'main',
      url: 'http://test.rightapps.net.au:3000/'
    }]
  },
  router: {
    middleware: 'auth'
  },
  server: {
    port: 5000
  },
  /*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */
  build: {
    extend(config, ctx) {},
  },

}
