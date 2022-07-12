/// <reference types="cypress" />
import { scrapePage } from '@fixtures/type/scrapePage'
/**
 * Vist page and assert response code is as expected
 */
Cypress.Commands.add('validatePageLoad', (page: scrapePage) => {
    cy.intercept(page.url).as(`${page.name}`)
    cy.visit(page.url, { failOnStatusCode: false })
    cy.wait(`@${page.name}`).its('response.statusCode').should('eq', page.code)
});
