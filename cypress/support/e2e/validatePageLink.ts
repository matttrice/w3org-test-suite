/// <reference types="cypress" />
/**
 * Send rest call to validate the page link is live
 */
Cypress.Commands.add('validatePageLink', (link: string) => {
    cy.request({ method: 'GET', url: link, failOnStatusCode: false })
        .then(res => {
            expect(res.status).to.not.be.within(400, 599, 'Status Code')
        });
});
