import { defineConfig } from 'cypress'
import { pages } from './cypress/fixtures/scrapePages'
import { getApiLinks } from './util/getApiLinks'

export default defineConfig({
  // setupNodeEvents can be defined in either
  // the e2e or component configuration
  e2e: {
    async setupNodeEvents(on, config) {

      // dynamically preprocess list of urls to 
      // use with cypress-each plugin
      config.env.links = await getApiLinks(pages)
      
      return config
    },
    baseUrl: 'https://www.w3.org',
    specPattern: 'cypress/e2e/**/*.spec.{js,jsx,ts,tsx}'
  }
})



