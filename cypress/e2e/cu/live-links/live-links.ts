import { Given, Then, And } from "@badeball/cypress-cucumber-preprocessor"
import { apiLinks } from '@fixtures/type/apiLinks'
const { _ } = Cypress

// setupNodeEvents pre-processed contains array of links from each page 
const pages: Array<apiLinks> = Cypress.env('links')

Given('The {string} page exists', function (page: string) {
    cy.then(() => {
        // link feature keyword to preprocessed data
        this.page = pages.find(({ name }) => name == page)
        // @todo validate url
        expect(this.page.name).to.be.a('string')

    })
})

Then('The page opens without error', function () {
    cy.validatePageLoad(this.page)
})

And('The console does not have errors', function () {
    cy.validateNoConsoleErrors(this.page)
})

And('All links on the page are live', function () {
    
    // @todo each link in own it()
    // first 404 stops execution - not great
    // see cypress/cy/live-links-loop.spec.ts for other solution
    _.each(this.page.links, (link) => {
            cy.validatePageLink(link)
    })
})
