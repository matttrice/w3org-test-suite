/// <reference types="cypress" />

context('Validate links', () => {

    it('Should load page', ()=>{
     cy.visit('/standards/badpage', {failOnStatusCode:false})
    })

})