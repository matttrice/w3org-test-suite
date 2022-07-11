
/// <reference types="cypress" />
import { scrapePage } from '@fixtures/type/scrapePage'

Cypress.Commands.add('validatePageLoad', (page: scrapePage) => {
    cy.intercept(page.url).as(`${page.name}`)
    // vist page and allow 404s to be caught and asserted by the intercept
    cy.visit(page.url, { failOnStatusCode: false })
    cy.wait(`@${page.name}`).its('response.statusCode').should('eq', 200)
})

Cypress.Commands.add('validateNoConsoleErrors', (page: scrapePage) => {
    cy.visit(page.url, { failOnStatusCode: false,
        onBeforeLoad(win) {
            cy.spy(win.console, 'error').as('spyErrorLog')       
        },
    })
        cy.get('@spyErrorLog').should('not.have.been.called')
})

Cypress.Commands.add('validatePageLink', (link: string) => {
    cy.request({ method: 'GET', url: link, failOnStatusCode: false })
        .then(res => {
            expect(res.status).to.not.be.within(400, 599, 'Status Code')
        })
})

Cypress.Commands.add('scrapeAndValidateAllPageLinks', () => {
    cy.get("a:not([href*='mailto:'])")
    .each($a => {
            if (!$a.prop('href')) return
            cy.validatePageLink($a.prop('href'))
    })
})








