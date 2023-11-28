const { defineConfig } = require('cypress')

module.exports = defineConfig({
  chromeWebSecurity: false,
  e2e: {
    baseUrl: 'https://notes-serverless-app.com',
    env: {
      viewportWidthBreakpoint: 768,
    },
  },
  projectId: 'vzfmuu'
})
module.exports = defineConfig({
  env: {
    MAILOSAUR_API_KEY: "G12Ib3vRaVjHQNYPnVzcpUjcLD0UZiLe",
  },

  // ...
});


