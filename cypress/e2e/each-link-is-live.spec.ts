import 'cypress-each'
import { apiLinks } from '@fixtures/config/type/apiLinks'

// use preprocessed links with cypress-each 
// to create a separate test for each selector
const pages: Array<apiLinks> = Cypress.env('links')

context(`${pages[0].name} @ ${pages[0].url}`, () => {
    it.each(pages[0].links)('Link %s is live', (page) => {
        cy.visit(page, { failOnStatusCode: false })
        cy.get("a:not([href*='mailto:'])")
            .each($a => {
                it(`can visit ${$a.prop('href')}`, () => {
                    if (!$a.prop('href')) return
                    cy.request(
                        {
                            url: $a.prop('href'),
                            failOnStatusCode: false
                        }).then($res => {
                            expect($res.isOkStatusCode).to.eq(200)
                        })
                })
            })
    })
})
