import { defineConfig } from 'cypress'
import { getApiLinks } from './util/getApiLinks'

export default defineConfig({
  // setupNodeEvents can be defined in either
  // the e2e or component configuration
  e2e: {
    async setupNodeEvents(on, config) {
      const urls :Array<{name: string, url: string }> = [
      { name: 'badpage' , url: 'https://www.w3.org/standards/badpage' },
      { name: 'multimodal', url: 'https://www.w3.org/standards/webofdevices/multimodal' },
      { name: 'htlmcss', url: 'https://www.w3.org/standards/webdesign/htmlcss'}
      ]

      const links = await getApiLinks(urls)

      config.env.links = links
      return config
    },
    baseUrl: 'https://www.w3.org',
    specPattern: 'cypress/e2e/**/*.spec.{js,jsx,ts,tsx}'
  }
})



