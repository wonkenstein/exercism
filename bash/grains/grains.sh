#!/usr/bin/env bash

main() {
  # A string variable containing only the FIRST argument passed to the script,
  # you can use input="$@" to get a string with ALL arguments
  limit=$1
  isNumber='^[0-9]+$'
  ratio=2

  if [[ $limit = 'total' ]]; then
    # hardcoding this as arithmetic wasn't working with large numbers
    echo '18446744073709551615'
    exit 0
  elif [[ $limit =~ $isNumber ]] && [ $limit -gt 0 ] && [ $limit -le 64 ]; then
    squareCount=1
    counter=1
    total=$squareCount
    while [ $counter -lt $limit ]
    do
        counter=$(($counter+1))
        squareCount=$(($squareCount*2))
        squareCount=${squareCount//\-/} # remove the negative sign
        # total=$(($squareCount+$total))
    done
    echo $squareCount
    # echo $total
    exit 0
  fi

  echo "Error: invalid input"
  exit 1
}

# Calls the main function passing all the arguments to it via '$@'
# The argument is in quotes to prevent whitespace issues
main "$@"

