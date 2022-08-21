const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "https://music.youtube.com",
    viewportWidth: 1280,
    viewportHeight: 768,
    chromeWebSecurity: false,
    experimentalSessionAndOrigin: true
  },
});
