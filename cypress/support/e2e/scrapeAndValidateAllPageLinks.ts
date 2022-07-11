Cypress.Commands.add('scrapeAndValidateAllPageLinks', () => {
    cy.get("a:not([href*='mailto:'])").then($a =>{
        cy.log(`found ${$a.length}`)
        })
        .each($a => {
            if (!$a.prop('href'))
                return;
            cy.validatePageLink($a.prop('href'))
        })
})
