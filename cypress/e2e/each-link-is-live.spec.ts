import 'cypress-each'
import { apiLinks } from '@fixtures/type/apiLinks'

const { _ } = Cypress

// use preprocessed links with cypress-each  
// to create a separate test for each selector
const pages: Array<apiLinks> = Cypress.env('links')
const page1 = pages[0]

_.each(pages, (currentPage, i) =>
    context(`${currentPage.name} @ ${currentPage.url}`, () => {
        before(() => {
            // intercept to visit page but still log 404
            cy.intercept(currentPage.url).as('rootPage')
        })

        it('can visit page (i.e. 200)', () => {
            cy.visit(currentPage.url, { failOnStatusCode: false })
            cy.wait('@rootPage').its('response.statusCode').should('eq', 200)
        })

        it.each(currentPage.links)(`${currentPage.name} %s is live`, (preproccedLink) => {
            cy.request({ method: 'GET', url: preproccedLink, failOnStatusCode: false })
                .then(res => {
                    expect(res.status).to.not.be.within(400, 599, 'Status Code')
                })
        })
    })
)