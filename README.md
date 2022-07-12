# W3.org Live Links Test Suite using Cypress.io
This repo presents both `Cucumber` and `Cypress`s tests for validating links and page loads in Chrome and Firefox on docker.

Note: The non-cucumber [cypress test](cypress/e2e/cypress/live-links-loop.spec.ts) variant utilises the `cypress-each` package and a custom pre-process step that generates a static list of [pagesToScrape](cypress/fixtures/pagesToScrape.ts) to create separate `it()` statements for each link found on each page. This helps quantify results by increasing test count from 3 to 147.
<div align="center">
  <img src="/assets/img/badpage-link-scrape.png"
       width="500px"
  />
</div>

# Usage
### Docker: 
Runs the Cucumber and Cypress tests in Chrome and Firefox with `Cypress 10.3.0`:
1. `npm run docker`

### Jest: 
Tests the node pre-process function [util/getApiLinks](util/getApiLinks.test.ts), and validates the results according to typescript type.
1. `npm run jest:test`

### Cypress
1. `npm run cypress:open` 

# Results:
<div align="center">
  <img src="/assets/img/docker-run.png"
       width="500px"
  />
</div>

# Requirements:
- Dockerized - Runs both Firefox and Chrome
- Typescript
- Cypress, Cucumber Tests: 
    - There are no console errors on page loads (chrome minimum)
    - The response code from the page (200, 302, 404, etc.)
    - All links on the page go to another live (non 4xx) page

# Known Issues
- Cypress Docker builds not working on Macbook Air M1
  - https://github.com/cypress-io/cypress-docker-images/issues/431