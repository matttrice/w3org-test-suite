Cypress.Commands.add('scrapeAndValidateAllPageLinks', () => {
    cy.get("a:not([href*='mailto:'])")
        .each($a => {
            if (!$a.prop('href'))
                return;
            cy.validatePageLink($a.prop('href'));
        });
});
