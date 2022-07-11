import { defineConfig } from 'cypress'
import { pages } from './cypress/fixtures/pagesToScrape'
import { getApiLinks } from './util/getApiLinks'

import { addCucumberPreprocessorPlugin } from '@badeball/cypress-cucumber-preprocessor'
import browserify from '@badeball/cypress-cucumber-preprocessor/browserify'

async function setupNodeEvents(
  on: Cypress.PluginEvents,
  config: Cypress.PluginConfigOptions
): Promise<Cypress.PluginConfigOptions> {
  await addCucumberPreprocessorPlugin(on, config)
  on(
    'file:preprocessor',
    browserify(config, {
      typescript: require.resolve('typescript'),
    })
  )

  // getApiLinks pre-processes the list of anchors links 
  // the spec uses with cypress-each plugin
  config.env.links = await getApiLinks(pages)

  return config
}

export default defineConfig({
  e2e: {
    baseUrl: 'https://www.w3.org',
    specPattern: ['cypress/e2e/**/*.spec.{js,jsx,ts,tsx}', '**/*.feature'],
    setupNodeEvents,
  },
})



