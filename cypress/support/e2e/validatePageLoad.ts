/// <reference types="cypress" />
import { scrapePage } from '@fixtures/type/scrapePage'
/**
 * Vist page but allow 404s to be caught and asserted by the intercept
 */
Cypress.Commands.add('validatePageLoad', (page: scrapePage) => {
    cy.intercept(page.url).as(`${page.name}`)
    cy.visit(page.url, { failOnStatusCode: false })
    cy.wait(`@${page.name}`).its('response.statusCode').should('eq', 200)
});
