export default {
  ssr: false,

  target: "static",

  head: {
    title: "ab-testing",
    htmlAttrs: {
      lang: "en"
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },

  image: {
    // Generate images to `/_nuxt/image/file.png`
    staticFilename: "[publicPath]/images/[name]-[hash][ext]"
  },

  css: [],

  plugins: [
    "~plugins/vue-final-modal.js",
    { src: "@/plugins/vue-material-icons", mode: "client" }
  ],

  components: true,

  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    "@nuxtjs/tailwindcss",
    "@nuxt/image"
  ],

  modules: [
    [
      "@netsells/nuxt-hotjar",
      {
        id: "2310570",
        sv: "6"
      }
    ]
  ],

  build: {
    transpile: ["vue-final-modal"]
  }
};
