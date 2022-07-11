import { Given, Then, And } from "@badeball/cypress-cucumber-preprocessor";
import 'cypress-each'
import { apiLinks } from '@fixtures/type/apiLinks'

// setupNodeEvents pre-processed config pagesToScrape 
const pages: Array<apiLinks> = Cypress.env('links')

Given('The {string} page exists', function (page: string) {
    cy.then(() => {
        console.log(page)
        console.log(JSON.stringify(this.page))
        this.page = pages.find( ({name}) => name == page)

        expect(this.page.name).to.be.a('string')

    })
})

Then('The page opens without error', function () {
    cy.validatePageLoad(this.page)
})

And('The console does not have errors', function () {
    cy.validateNoConsoleErrors(this.page)
})

// processes all links on page, fails test on first 404 - not great
And('All links on the page are live', function () {
    cy.scrapeAndValidateAllPageLinks()
})