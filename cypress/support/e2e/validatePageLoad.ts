/// <reference types="cypress" />
import { scrapePage } from '@fixtures/type/scrapePage'

Cypress.Commands.add('validatePageLoad', (page: scrapePage) => {
    cy.intercept(page.url).as(`${page.name}`)
    // vist page and allow 404s to be caught and asserted by the intercept
    cy.visit(page.url, { failOnStatusCode: false })
    cy.wait(`@${page.name}`).its('response.statusCode').should('eq', 200)
});
