const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      // Add these browser launch options
      on('before:browser:launch', (browser, launchOptions) => {
    if (browser.family === 'chromium' && browser.name !== 'electron') {
        launchOptions.args.push('--disable-blink-features=AutomationControlled');
        launchOptions.args.push('--exclude-switches=enable-automation');
        launchOptions.args.push('--disable-extensions-except=/path/to/extension');
        launchOptions.args.push('--load-extension=/path/to/extension');
    }
    return launchOptions;
});
    },
    specPattern: "cypress/e2e/**/*.cy.{js,jsx,ts,tsx}",
    supportFile: "cypress/support/e2e.js",
    
    // Basic settings only
    chromeWebSecurity: false,
    failOnStatusCode: false,
    defaultCommandTimeout: 10000,
    requestTimeout: 10000,
    responseTimeout: 10000,
    
    // Memory management (add these back gradually)
    experimentalMemoryManagement: true,
    numTestsKeptInMemory: 1,
  },
});