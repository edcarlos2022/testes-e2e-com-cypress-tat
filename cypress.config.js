const { defineConfig } = require('cypress')

module.exports = defineConfig({
  chromeWebSecurity: false,
  e2e: {
    baseUrl: 'https://notes-serverless-app.com',
    env: {
      viewportWidthBreakpoint: 768,
    },
    
    setupNodeEvents(on, config) {
      // Adiciona o tempo limite padrão aqui
      

      // implementa outros listeners de eventos do nó aqui
    },
  },
})



