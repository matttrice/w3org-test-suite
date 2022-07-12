/// <reference types="cypress" />
import { pages } from '@fixtures/pagesToScrape'
const { _ } = Cypress

/**
 * Loop through list of pages and test if
 * page is live, no console errors, and all
 * links on page are live.
 * 
 * NOTE: "Links are live" test is not 
 * ideal since first fail on 404 will fail 
 * entire test. Prefer ./live-links-loop.spec.ts
 * 
 **/

describe(`Test live links for: ${Cypress.config('baseUrl')}`, () => {
    _.each(pages, (currentPage) => {
        context(`${currentPage.name} @ ${currentPage.url}`, () => {
            it(`Can visit ${currentPage.name} page`, () => {
                cy.validatePageLoad(currentPage)
            })

            it(`Can visit ${currentPage.name} without console errors`, () => {
                cy.validateNoConsoleErrors(currentPage)
            })
            // processes all links on page, fails test on first 404 - not great
            it(`All links are live on: ${currentPage.name}`, () => {
                cy.visit(currentPage.name, { failOnStatusCode: false })
                cy.scrapeAndValidateAllPageLinks()
            })
        })
    })
})