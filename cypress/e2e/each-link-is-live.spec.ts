import 'cypress-each'
import { apiLinks } from '@fixtures/config/type/apiLinks'

// use preprocessed links with cypress-each  
// to create a separate test for each selector
const pages: Array<apiLinks> = Cypress.env('links')

context(`${pages[0].name} @ ${pages[0].url}`, () => {
    
    it.each(pages[0].links)(`${pages[0].name} %s is live`, (page) => {
        cy.request({ method:'GET', url:page, failOnStatusCode: false })
        .then(res =>{
            expect(res.status).to.not.be.within(400,599,'Error Code Found')
        })
    })
})
