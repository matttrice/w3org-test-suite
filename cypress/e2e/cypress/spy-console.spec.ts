/**
 * Determine if console errors are detected by 
 * loading static html with 2 known console errors
 */

const staticUrl = 'cypress/fixtures/other/console-error.html'
const loaded = 'Loaded!'
const satoshi = 'Satoshi!'
/**
 * Asserts if both console errors were caught
 */
const caughtBoth = () => cy.get('@consoleSpy').then(consoleSpy => {
    expect(consoleSpy).to.be.calledTwice
    expect(consoleSpy).to.be.calledWithExactly(loaded)
    expect(consoleSpy).to.be.calledWithExactly(satoshi)
})

/**
 * Asserts if only once errors was caught. (not good)
 */
const caughtOne = () => cy.get('@consoleSpy').then(consoleSpy => {
    expect(consoleSpy).to.be.calledOnce
    expect(consoleSpy).to.be.calledWithExactly(loaded)
    expect(consoleSpy).not.to.be.calledWithExactly(satoshi)
})

/**
 * Uses a static html page with exactly two console log errors.
 * First envoked at 500ms = Satoshi!
 * Second envoked after load event = Loaded!
 * 
 * Tests prove spy that is registerd as @consoleSpy before spec files load,
 * does not capture console log events unless html load event occurs
 */
context('Validate approach to detecting console errors', {
    baseUrl: null }, () => {

    beforeEach(() => { cy.visit(staticUrl)})
    // After behaves weirdly
    //afterEach(caughtOne) // catches both - fails
    //afterEach(caughtBoth) // catches one - fails

    it('Only finds one but should be two. Spy only detects after page loaded event', () => {
        caughtOne()
    })

    it('Catches both but only because of wait', () => {
        cy.wait(500)
        caughtBoth()
    })
})
