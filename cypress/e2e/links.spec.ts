/// <reference types="cypress" />

describe('test w3', () => {

    it('can visit all badpage links', () => {
        cy.visit('standards/badpage', { failOnStatusCode: false })
        cy.get("a:not([href*='mailto:'])")
            .each($a => {
                    if (!$a.prop('href')) return
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
        cy.visit('standards/webofdevices/multimodal')
        cy.get("a:not([href*='mailto:'])")
            .each($a => {
                if (!$a.prop('href')) return
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
        cy.visit('standards/webdesign/htmlcss')
        cy.get("a:not([href*='mailto:'])")
            .each($a => {
                if (!$a.prop('href')) return
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