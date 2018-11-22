#!/usr/bin/env bash

main() {
  # A string variable containing only the FIRST argument passed to the script,
  # you can use input="$@" to get a string with ALL arguments
  limit=$1
  isNumber='^[0-9]+$'

  if [[ $limit = 'total' ]]; then
    mode='total'
    let limit=64
  elif [[ "$limit" =~ $isNumber ]] && [ $limit -gt 0 ] && [ $limit -le 64 ]; then
    mode='default'
  else
    echo "Error: invalid input"
    exit 1
  fi

  # https://www.mathsisfun.com/algebra/sequences-sums-geometric.html
  # Brute force this!
  let squareCount=1
  let total=1
  let counter=1
  while [ $counter -lt $limit ]
  do
      let counter+=1
      # https://askubuntu.com/questions/229446/how-to-pass-results-of-bc-to-a-variable
      # use bc as 9223372036854775808 will end up -ve
      squareCount=$(bc <<< "$squareCount*2")
      total=$(bc <<< "$total+$squareCount")
  done

  if [[ $mode = 'total' ]]; then
    echo $total
  else
    echo $squareCount
  fi

  exit 0
}

# Calls the main function passing all the arguments to it via '$@'
# The argument is in quotes to prevent whitespace issues
main "$@"
