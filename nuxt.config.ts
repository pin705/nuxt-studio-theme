// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {
    enabled: true,

    timeline: {
      enabled: true,
    },
  },
  modules: [
    "@nuxt/ui",
    "@nuxt/content",
    "@nuxtjs/google-fonts",
    "@vueuse/nuxt",
    "@nuxtseo/module",
    "@nuxthq/studio",
  ],
  app: {
    pageTransition: { name: "page", mode: "out-in" },
    head: {
      htmlAttrs: {
        lang: "en",
      },
      bodyAttrs: {
        class: "antialiased bg-gray-50 dark:bg-black min-h-screen",
      },
    },
  },
  ui: {
    icons: ["simple-icons", "solar"],
  },
  content: {
    highlight: {
      theme: "slack-dark",
    },
    experimental: {
      search: true as any,
    },
  },
  ogImage: {
    compatibility: { prerender: { chromium: false } },
  },
  googleFonts: {
    display: "swap",
    families: {
      "Fira+Code": [300, 400, 500, 600],
    },
  },
  runtimeConfig: {
    public: {
      statusSiteSlug: process.env.STATUS_SITE_SLUG,
      baseURL: process.env.NUXT_PUBLIC_SITE_URL,
      ownerName: process.env.OWNER_NAME,
      analyticsClientId: process.env.ANALYTICS_CLIENT_ID,
    },
  },
  site: {
    name: process.env.OWNER_NAME,
  },
});