import 'cypress-each'
import { apiLinks } from '@fixtures/type/apiLinks'

// use preprocessed links with cypress-each  
// to create a separate test for each selector
const pages: Array<apiLinks> = Cypress.env('links')
const page1 = pages[0]
context(`${page1.name} @ ${page1.url}`, () => {
    it('can visit page (i.e. 200)', () => {
        cy.visit(page1.url)
    })

    it.each(page1.links)(`${page1.name} %s is live`, (preproccedLink) => {
        cy.request({ method: 'GET', url: preproccedLink, failOnStatusCode: false })
            .then(res => {
                expect(res.status).to.not.be.within(400, 599, 'Error Code Found')
            })
    })
})
