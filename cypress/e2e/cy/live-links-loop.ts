import 'cypress-each'
import { apiLinks } from '@fixtures/type/apiLinks'

const { _ } = Cypress

// loop through list of pages and use 
// preprocessed links with cypress-each  
// to create a separate test for each selector
const pages: Array<apiLinks> = Cypress.env('links')

_.each(pages, (currentPage, i) =>
    context(`${currentPage.name} @ ${currentPage.url}`, () => {
        it(`can visit ${currentPage.name} page)`, () => {
            cy.validatePageLoad(currentPage)
        })

        it(`can visit ${currentPage.name} without console errors`, () => {
            cy.validateNoConsoleErrors(currentPage)
        })

        it.each(currentPage.links)(` link: %s is live on ${currentPage.name}`, (preproccedLink) => {
            cy.validatePageLink(preproccedLink)
        })
    })
)