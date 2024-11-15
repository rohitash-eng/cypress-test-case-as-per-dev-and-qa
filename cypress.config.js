const { defineConfig } = require("cypress");

module.exports = defineConfig({
  chromeWebSecurity: false,
  e2e: {
    chromeWebSecurity: false,
    baseUrl : 'https://opensource-demo.orangehrmlive.com/web/index.php/',
    defaultCommandTimeout: 30000,
    env : {
      // allureReuseAfterSpec:true,
      // allureResultsPath: "allure-results",
      // allureAttachRequests : true,
      Cypress_Env : process.env.Cypress_Env || "DEV",
      AppEnvironment : "DEV",
    },
    specPattern : 'cypress/e2e/specs/*.spec.cy.js',
    testIsolation : false,
    supportFile: 'cypress/support/e2e.{js,jsx,ts,tsx}'
  },
});