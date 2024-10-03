const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "c3w8ex",  
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    video: true,
    reporterOptions: {
      reportDir: 'cypress/results',
      overwite: false,
      html: true,
      json: false,
      timestamp: "mmddyyyy_HHMMss"
    },
  },
});
