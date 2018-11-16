#!/usr/bin/env bash

main() {
  # A string variable containing only the FIRST argument passed to the script,
  # you can use input="$@" to get a string with ALL arguments
  let input=$1

  if [ $input -le 0 ] || [ $input -gt 64 ]
  then
    echo "Error: invalid input"
    exit 1
  fi

  # https://www.mathsisfun.com/algebra/sequences-sums-geometric.html
  let total=1
  let counter=1
  while [ $counter -lt $input ]
  do
      let counter+=1
      # https://askubuntu.com/questions/229446/how-to-pass-results-of-bc-to-a-variable
      # use bc as 9223372036854775808 will end up -ve
      total=$(bc <<< "$total*2")
  done

  echo $total
  exit 0
}

# Calls the main function passing all the arguments to it via '$@'
# The argument is in quotes to prevent whitespace issues
main "$@"
