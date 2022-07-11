import { scrapePage } from '@fixtures/type/scrapePage';


declare global {
    namespace Cypress {
        interface Chainable {
            /**
             * Accepts a link and sends an api request to
             * validate the page is live (i.e. not a 400-599 status code)
             *
             * @example cy.validatePageLink(link)
             */
            validatePageLink(value: string): Chainable<Element>;

            /**
             * Parses current page using cypress to find all non-email links
             * Drawback all requests will be contained in a single it()
             *
             * Use cy.validatePageLink() in a loop or with cypress-each for
             * better output
             *
             * @example cy.scrapeAndValidateAllPageLinks(link)
             */
            scrapeAndValidateAllPageLinks(): Chainable<Element>;

            /**
             * Accepts an object of { name: string, url: string}
             * and *visits* the url to confirm it loads for the user
             * with a 200 response code
             *
             * This is tricky when requirements say "visit page and validate response
             * code (200, 302, 404, etc.)"". Validate meaning, just log any status?
             * With ambiguity, this function assumes anything other than 200 is a fail,
             * but does so with cypress `failOnStatusCode: false` to allow the visit but
             * uses an intercept to make the assertion rather than just hard fail on visit.
             *
             * @example cy.validatePageLoad({name: 'w3org', url:'https://www.w3.org'})
             */
            validatePageLoad(value: scrapePage): Chainable<Element>;

            /**
             * Accepts an object of { name: string, url: string} to visit
             * and confirms no console errors were found by spying on the
             * window object console.error function
             *
             * @example cy.validateNoConsoleErrors({name: 'w3org', url:'https://www.w3.org'})
             */
            validateNoConsoleErrors(value: scrapePage): Chainable<Element>;
        }
    }
}
