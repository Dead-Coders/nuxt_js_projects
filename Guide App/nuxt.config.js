export default {
    // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
    ssr: false,
  
    // Target: https://go.nuxtjs.dev/config-target
    target: "static",

    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: process.env.title || "Guide",
        htmlAttrs: {
            lang: process.env.lang || "en"
        },
        meta: [
            { charset: "utf-8" },
            { "http-equiv": "X-UA-Compatible", content: "IE=edge" },
            { name: "viewport", content: "width=device-width, initial-scale=1" },
            { hid: "description", name: "description", content: process.env.description },
            { hid: "robots", name: "robots", content: "index,follow" },
            { hid: "theme-color", name: "theme-color", content: "#27b361" }
        ],
        link: [
            { rel: "icon", type: "image/x-icon", href: process.env.favicon }
        ]
    },
  
    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [
        { src: "~assets/css/main.css", lang: "css" },
        { src: "~assets/css/sidebar.css", lang: "css" }
    ],
  
    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [
    ],
  
    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,
  
    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [],
  
    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        "bootstrap-vue/nuxt",
        "@nuxtjs/markdownit"
    ],

    markdownit: {
        preset: "default",
        linkify: true,
        breaks: true,
        use: [
            "markdown-it-div",
            "markdown-it-attrs"
        ]
    },
    
    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {
        extractCSS: true
    },

    publicRuntimeConfig: {
        env: {
            title: process.env.title,
            description: process.env.description,
            favicon: process.env.favicon,
            logo: process.env.logo,
            subtitle: process.env.subtitle,
            footer: process.env.footer,
            lang: process.env.lang,
            icon_url: process.env.icon_url
        }
    }
}
  