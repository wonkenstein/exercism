//
// This is only a SKELETON file for the 'Roman Numerals' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const addUnit = (unit, number) => {
  let results = ''
  for (let i = 0; i < number; i++) {
    results += unit
  }
  return results
}

const romanNumeralsUnder10 = (currentValue) => {
  let dividendAndRemainder = getDividendAndRemainder(currentValue, 10)
  let result

  if (dividendAndRemainder.remainder === 9) {
    result = 'IX'
  } else if (dividendAndRemainder.remainder === 4) {
    result = 'IV'
  } else if (dividendAndRemainder.remainder > 4) {
    result = 'V'
    dividendAndRemainder = getDividendAndRemainder(currentValue, 5)
    result += addUnit('I', dividendAndRemainder.remainder)
  } else {
    result = addUnit('I', dividendAndRemainder.remainder)
  }

  return result
}

const reduceValue = (value, reduceBy) => {
  return value - reduceBy
}

const romanNumerals = (value, romanUnit, decimalUnit) => {
  let result
  let currentValue = value
  let dividendAndRemainder = getDividendAndRemainder(currentValue, decimalUnit)
  result += addUnit(romanUnit, dividendAndRemainder.dividend)

  currentValue = reduceValue(currentValue, dividendAndRemainder.dividend * decimalUnit)
  if (currentValue > decimalUnit - 11) {
    result += addUnit(`X${romainUnit}`, 1)
  } else {
    result += addUnit(romanUnit, dividendAndRemainder.dividend)
  }
  return result
}

export const toRoman = (numberValue) => {
  // throw new Error('Remove this statement and implement this function');
  // console.log('numberValue % 10', numberValue % 10)
  let currentValue = numberValue
  let result = ''
  let dividendAndRemainder

  dividendAndRemainder = getDividendAndRemainder(currentValue, 50)
  result += addUnit('L', dividendAndRemainder.dividend)

  currentValue = reduceValue(currentValue, dividendAndRemainder.dividend * 50)
  if (currentValue > 39) {
    result += addUnit('XL', 1)
    currentValue = reduceValue(currentValue, 40)

    result += romanNumeralsUnder10(currentValue)
  } else {
    dividendAndRemainder = getDividendAndRemainder(currentValue, 10)
    result += addUnit('X', dividendAndRemainder.dividend)

    currentValue = reduceValue(currentValue, dividendAndRemainder.dividend * 10)
    result += romanNumeralsUnder10(currentValue)
  }

  return result
};

const getDividendAndRemainder = (value, divideBy) => {

  const dividend = Math.floor(value / divideBy)
  const remainder = value % divideBy

  return {
    dividend,
    remainder
  }
}
