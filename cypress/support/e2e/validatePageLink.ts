/// <reference types="cypress" />
Cypress.Commands.add('validatePageLink', (link: string) => {
    cy.request({ method: 'GET', url: link, failOnStatusCode: false })
        .then(res => {
            expect(res.status).to.not.be.within(400, 599, 'Status Code')
        });
});
