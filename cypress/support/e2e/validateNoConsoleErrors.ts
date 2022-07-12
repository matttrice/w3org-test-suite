import { scrapePage } from '@fixtures/type/scrapePage'

/**
 * Catches console errors only after page load
 * See spy-console.spec.ts for investigation on behavior
 */
Cypress.Commands.add('validateNoConsoleErrors', (page: scrapePage) => {
    cy.visit(page.url, { failOnStatusCode: false })
    cy.get('@consoleSpy').then(consoleSpy => {
        expect(consoleSpy).to.not.be.called
    })
})
