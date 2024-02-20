// import this after install `@mdi/font` package
import "@mdi/font/css/materialdesignicons.css"

import "vuetify/styles"
import { createVuetify } from "vuetify"

export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    // ... your configuration
    theme: {
      themes: {
        light: {
          colors: {
            primary: "#1565C0", //blue-darken-3
            // primary: "#1867C0",
            secondary: "#5CBBF6",
          },
        },
      },
    },
  })
  app.vueApp.use(vuetify)
})
