# W3.org Live Links Test Suite using Cypress.io
This repo presents both `Cucumber` and `Cypress`s tests for validating links and page loads on the w3.org website.
Results are shown below.

<div align="center">
  <img src="/assets/img/docker-run.png"
       width="100px"
  />
</div>

Note: The non-cucumber [cypress test](cypress/e2e/cypress/live-links-loop.spec.ts) variant utilises the `cypress-each` package and a custom pre-process step that generates a static list of [pagesToScrape](cypress/fixtures/pagesToScrape.ts) to create separate `it()` for each link found at each url. This helps quantify results by increasing test count from 3 to 147 and allows the `badpage` to process links on the 404 page itself which is different than the [cucumber test](cypress/e2e/cucumber/live-links.feature) which fails the whole test as soon as the 404 loads.

## Ambiguity
The request to "validate" the response code could have been interpreted a few ways especilly in regards to the `badpage` url wich returns a `404` and thus typically fail and cannont be visited, but the intent may have been to expect a 404. 

# Usage
1. `npm install`
1. `npm run docker`

# Requirements:
- Dockerized - Runs both Firefox and Chrome
- Typescript
- Cypress, Cucumber Tests: 
    - There are no console errors on page loads (chrome minimum)
    - The response code from the page (200, 302, 404, etc.)
    - All links on the page go to another live (non 4xx) page

# Known Issues
- Cypress Docker builds not working on Mac M1
  - https://github.com/cypress-io/cypress-docker-images/issues/431 
- Cypress v10.3 had difficulty opening on Linux
 - Added branch `v9.7` to run Cypress downgraded version