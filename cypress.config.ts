import { defineConfig } from 'cypress';
import { baseUrl, defaultCommandTimeout } from './cypress/support/constants';
import AllureWriter from '@shelex/cypress-allure-plugin/writer';
import { logger } from './cypress/support/logger';

export default defineConfig({
  e2e: {
    specPattern: 'cypress/e2e/testUpload.cy.ts',
    baseUrl,
    defaultCommandTimeout,
    supportFile: 'cypress/support/index.ts',
    videosFolder: 'cypress/assets/videos',
    screenshotsFolder: 'cypress/assets/screenshots',
    downloadsFolder: 'cypress/assets/downloads',
    env: {
      allure: true,
      allureResultsPath: 'cypress/assets/allure-results',
    },
    setupNodeEvents(on, config) {
      on('task', {
        log(message) {
          logger.info(message);
          return null;
        },
      });
      AllureWriter(on, config);
      return config;
    },
  },
});
