#!/usr/bin/env bash
echo "Running Cypress e2e tests headlessly - on Mac M1 chip"

# Issues running latest cypress on mac m1 via docker:
# https://github.com/docker/for-mac/issues/5831
# https://github.com/cypress-io/cypress-docker-images/issues/431

# explanation of the "docker run" command line arguments
#
#  -it          = interactive terminal
#  -v $PWD:/e2e = map current folder to /e2e inside the container
#  -w /e2e      = set working directy to /e2e
#  $@           = pass any arguments to this script to the Cypress command
#                 like "./cy-run-macm1.sh --record"
docker run --rm -it --platform linux/amd64 -v $PWD:/e2e -w /e2e cypress/browsers:node14.19.0-chrome100-ff99-edge $@