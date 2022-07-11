/**
 * Determine if console errors are detected by 
 * loading static html with known console error
 */
context('Validate approach to detecting console errors', {
       baseUrl : null } ,() => {
    
    it('Should detect error with spy', () => {
        cy.validateNoConsoleErrors({ name: 'static-console-error-page', 
                url : 'cypress/fixtures/other/console-error.html'})
    })

    it('Should detect error with stub', () => {
        cy.visit('cypress/fixtures/other/console-error.html', {
            onBeforeLoad(win) {
                cy.stub(win.console, 'error').as('stubErrorLog')
            },
        })
        // deceiving because the get cause it to wait to be true
        cy.get('@stubErrorLog').should('be.calledWith', 'Hello Satoshi!')
        cy.window().then((win) => {
            expect(win.console.error).to.have.callCount(1)
        })
    })
})
