const { defineConfig } = require("cypress");

module.exports = defineConfig({
  requestTimeout: 60000,
  defaultCommandTimeout: 60000,
  viewportWidth: 1920,
  viewportHeight: 1080,
  e2e: {
    baseUrl: 'https://blogdoagi.com.br/'
  },
});
