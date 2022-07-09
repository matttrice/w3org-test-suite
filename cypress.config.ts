import { defineConfig } from 'cypress'
import { getApiLinks } from './util/getApiLinks'

export default defineConfig({

  env:{
    links : getApiLinks('https://www.w3.org/standards/webdesign/htmlcss')
  },
  // setupNodeEvents can be defined in either
  // the e2e or component configuration
  e2e: {
    setupNodeEvents(on, config) {
      
    },
    baseUrl: 'https://www.w3.org',
    specPattern: 'cypress/e2e/**/*.spec.{js,jsx,ts,tsx}'
  }
})


