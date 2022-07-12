#!/usr/bin/env bash
echo "Running Cypress e2e tests headlessly"

# explanation of the "docker run" command line arguments
#
#  -it          = interactive terminal
#  -v $PWD:/e2e = map current folder to /e2e inside the container
#  -w /e2e      = set working directy to /e2e
#  $@           = pass any arguments to this script to the Cypress command
#                 like "./cy-run.sh --record"
# set to "cypress run" by default
docker run -it -v $PWD:/e2e -w /e2e cypress/included:9.7.0 $@