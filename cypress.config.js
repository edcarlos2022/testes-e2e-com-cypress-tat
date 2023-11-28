const { defineConfig } = require('cypress')

module.exports = defineConfig({
  chromeWebSecurity: false,
  e2e: {
    baseUrl: 'https://notes-serverless-app.com',
    env: {
      viewportWidthBreakpoint: 768,
      MAILOSAUR_API_KEY: 'G12Ib3vRaVjHQNYPnVzcpUjcLD0UZiLe',
    },
  },
  projectId: 'vzfmuu'
})