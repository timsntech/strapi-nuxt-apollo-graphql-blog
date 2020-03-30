module.exports = {
  env: {
    strapiBaseUri: process.env.API_URL || "http://localhost:1337"
  },
  mode: "universal",
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || "",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || ""
      }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fff" },
  /*
   ** Global CSS
   */
  css: [
    "uikit/dist/css/uikit.min.css",
    "uikit/dist/css/uikit.css",
    "@assets/css/main.css"
  ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [{ src: "~/plugins/uikit.js", ssr: false }],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://bootstrap-vue.js.org
    "bootstrap-vue/nuxt",
    // Doc: https://axios.nuxtjs.org/usage
    "@nuxtjs/axios",
    "@nuxtjs/apollo"
  ],
  apollo: {
    clientConfigs: {
      default: {
        httpEndpoint: process.env.BACKEND_URL || "http://localhost:1337/graphql"
      }
    }
  },
  link: [
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css?family=Staatliches"
    }
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
};
