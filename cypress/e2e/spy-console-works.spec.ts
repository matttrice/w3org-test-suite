/**
 * Determine if console errors are detected by 
 * loading static html with known console error
 */
context('Validate approach to detecting console errors', {
       baseUrl : null } ,() => {
    
    it('Should detect error with spy', () => {
        cy.visit('cypress/fixtures/other/console-error.html', {
            onBeforeLoad(win) {
                cy.spy(win.console, 'error').as('spyErrorLog')       
            },
        })
        cy.window().then((win) => {
            cy.get('@spyErrorLog').should('be.calledOnce')
            cy.get('@spyErrorLog').should('be.calledWith', 'Hello Satoshi!')
        })
    })

    it('Should detect error with stub', () => {
        cy.visit('cypress/fixtures/other/console-error.html', {
            onBeforeLoad(win) {
                cy.stub(win.console, 'error').as('stubErrorLog')
            },
        })
        cy.get('@stubErrorLog').should('be.calledWith', 'Hello Satoshi!')
        cy.window().then((win) => {
            expect(win.console.error).to.have.callCount(1)
        })
    })
})
