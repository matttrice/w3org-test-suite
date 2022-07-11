import { scrapePage } from '@fixtures/type/scrapePage'

Cypress.Commands.add('validateNoConsoleErrors', (page: scrapePage) => {
    cy.visit(page.url, {
        failOnStatusCode: false,
        onBeforeLoad(win) {
            cy.spy(win.console, 'error').as('spyErrorLog')
        },
    })
    cy.get('@spyErrorLog').should('not.have.been.called')
});
