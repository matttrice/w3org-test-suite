
/**
 * 
 * @type {Cypress.PluginConfig}
 */

import { pages } from '../fixtures/pagesToScrape'
import { getApiLinks } from '../../util/getApiLinks'

import { addCucumberPreprocessorPlugin } from '@badeball/cypress-cucumber-preprocessor'
import browserify from '@badeball/cypress-cucumber-preprocessor/browserify'

module.exports = async (on, config)=>{
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




