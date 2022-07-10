/**
 * Determin if console errors are detected by 
 * loading static html with known console error
 */
context('Validate method of detecting errors', {
       baseUrl : null } ,() => {
    
    it('Console error detected with spy', () => {
        cy.visit('cypress/fixtures/other/console-error.html', {
            onBeforeLoad(win) {
                cy.spy(win.console, 'error').as('errorLog')       
            },
        })
        cy.window().then((win) => {
            expect(win.console.error).to.have.callCount(1);
        })
    })

    it('Console error detected with stub and alias', () => {
        cy.visit('cypress/fixtures/other/console-error.html', {
            onBeforeLoad(win) {
                cy.stub(win.console, 'error').as('errorLog')
            },
        })
        cy.get('@errorLog').should('be.calledWith', 'Hello World!')

    })
})
