/// <reference types="cypress" />

describe('test w3', () => {

    it('can visit all badpage links', () => {
        cy.visit('standards/badpage', { failOnStatusCode: false })
        cy.scrapeAndValidateAllPageLinks()
    })

    it('can visit all multimodal links', () => {
        cy.visit('standards/webofdevices/multimodal')
        cy.scrapeAndValidateAllPageLinks()
    })

    it('can visit all htmlcss links', () => {
        cy.visit('standards/webdesign/htmlcss')
        cy.scrapeAndValidateAllPageLinks()
    })
})