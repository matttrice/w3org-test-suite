# Cypress Browsers Images:
# https://github.com/cypress-io/cypress-docker-images/tree/master/browsers
 
# pull image
FROM --platform=linux/amd64 cypress/browsers:node16.5.0-chrome97-ff96
# make directory inside container
RUN mkdir /app
WORKDIR /app
# copy cypress code from host to container
COPY . /app
# execute the tests
RUN npm install
# ensure cypress binary
RUN npx cypress install
RUN $(npm bin)/cypress verify

RUN $(npm bin)/cypress run --browser firefox --spec 'cypress/e2e/cucumber/live-links.feature,cypress/e2e/cypress/live-links-loop.spec.ts'
RUN $(npm bin)/cypress run --browser chrome --spec 'cypress/e2e/cucumber/live-links.feature,cypress/e2e/cypress/live-links-loop.spec.ts'
