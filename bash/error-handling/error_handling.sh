#!/usr/bin/env bash

set -o errexit
# This option will make the script exit when it tries to use an unset variable
set -o nounset

main() {
  # A string variable containing only the FIRST argument passed to the script,
  # you can use input="$@" to get a string with ALL arguments
  if [ $# -eq 0 ] || [ $# -gt 1 ]; then
    echo 'Usage: ./error_handling <greetee>'
    exit 1
  fi

  input=$1
  echo "Hello, $input"
  exit 0
}

# Calls the main function passing all the arguments to it via '$@'
# The argument is in quotes to prevent whitespace issues
main "$@"
