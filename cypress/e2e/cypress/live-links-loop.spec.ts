import 'cypress-each'
import { apiLinks } from '@fixtures/type/apiLinks'

const { _ } = Cypress

/**
 * Loop through list of pages and test if
 * page is live, no console errors, and all
 * links on page are live. 
 * Uses preprocessed links in env variable
 * with cypress-each to create a separate
 * test for each link on page
 **/

// setupNodeEvents pre-processed config pagesToScrape 
const pages: Array<apiLinks> = Cypress.env('links')

context(`Test live links for:  ${Cypress.config('baseUrl')}`, ()=>{
_.each(pages, (currentPage, i) =>
    context(`${currentPage.name} @ ${currentPage.url}`, () => {
        it(`Can visit ${currentPage.name} page`, () => {
            cy.validatePageLoad(currentPage)
        })

        it(`Can visit ${currentPage.name} without console errors`, () => {
            cy.validateNoConsoleErrors(currentPage)
        })

        // Dynamically generate it() tests with cypress-each, 
        // one test per link instead of failing on the first
        it.each(currentPage.links)
        (`Link %K of ${currentPage.count} is live: %s on: ${currentPage.name}`, 
            (preproccedLink) => {
                cy.validatePageLink(preproccedLink)
        })
    })
)
})