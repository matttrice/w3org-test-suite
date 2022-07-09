/// <reference types="cypress" />

const { _ } = Cypress


describe('test w3', () => {

    it('can visit all badpage links', () => {
        cy.visit('https://www.w3.org/standards/badpage', { failOnStatusCode: false })
        cy.get("a:not([href*='mailto:'])")
            .each($a => {
                if(!$a.prop('href')) return   
                cy.request(
                    {
                        url: $a.prop('href'),
                        failOnStatusCode: false
                    }).then($res => {
                        it(`can visit ${$a.prop('href')}`, () => {

                            expect($res.isOkStatusCode).to.eq(200)
                        })
                    })
            })
    })

    it('can visit all multimodal links', () => {
        cy.visit('https://www.w3.org/standards/webofdevices/multimodal')
        cy.get("a:not([href*='mailto:'])")
            .each($a => {
             if(!$a.prop('href')) return                
             cy.request(
                    {
                        url: $a.prop('href'),
                        failOnStatusCode: false
                    }).then($res => {
                        it(`can visit ${$a.prop('href')}`, () => {

                            expect($res.isOkStatusCode).to.eq(200)
                        })
                    })
            })
    })

    it('can visit all htmlcss links', () => {
        cy.visit('https://www.w3.org/standards/webdesign/htmlcss')
        cy.get("a:not([href*='mailto:'])")
            .each($a => {
                if(!$a.prop('href')) return   
                cy.request(
                    {
                        url: $a.prop('href'),
                        failOnStatusCode: false
                    }).then($res => {
                        it(`can visit ${$a.prop('href')}`, () => {

                            expect($res.isOkStatusCode).to.eq(200)
                        })
                    })
            })


    })
})