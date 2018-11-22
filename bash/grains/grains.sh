#!/usr/bin/env bash

main() {
  # A string variable containing only the FIRST argument passed to the script,
  # you can use input="$@" to get a string with ALL arguments
  limit=$1
  isNumber='^[0-9]+$'
  let ratio=2

  if [[ $limit = 'total' ]]; then
    # https://www.mathsisfun.com/algebra/sequences-sums-geometric.html
    # shortcut to total the amount ((2^64)-1)
    let limit=64
    total=$(bc <<< "$ratio^$limit-1")
    echo $total
    exit 0
  elif [[ "$limit" =~ $isNumber ]] && [ $limit -gt 0 ] && [ $limit -le 64 ]; then
    total=$(bc <<< "$ratio^($limit-1)")
    echo $total
    exit 0
  fi

  echo "Error: invalid input"
  exit 1
}

# Calls the main function passing all the arguments to it via '$@'
# The argument is in quotes to prevent whitespace issues
main "$@"

