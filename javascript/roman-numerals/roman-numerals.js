//
// This is only a SKELETON file for the 'Roman Numerals' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const appendRomanUnits = (unit, number) => {
  let results = ''
  for (let i = 0; i < number; i++) {
    results += unit
  }
  return results
}

const reduceValue = (value, reduceBy) => {
  return value - reduceBy
}

const convertToRomanNumeralUnits = (value, unit, romanNumeralValue, romanNumeralUnit) => {
  const dividend = Math.floor(value / unit)
  const currentRomanNumerals = appendRomanUnits(romanNumeralUnit, dividend)
  const currentValue = reduceValue(value, dividend * unit)

  return {
    value: currentValue,
    romanNumerals: `${romanNumeralValue}${currentRomanNumerals}`,
  }
}

export const toRoman = (numberValue) => {
  const romanNumeralUnits = [
    {
      romanNumeralUnit: 'M',
      value: 1000,
    },
    {
      romanNumeralUnit: 'CM',
      value: 900,
    },
    {
      romanNumeralUnit: 'D',
      value: 500,
    },
    {
      romanNumeralUnit: 'CD',
      value: 400,
    },
    {
      romanNumeralUnit: 'C',
      value: 100,
    },
    {
      romanNumeralUnit: 'XC',
      value: 90,
    },
    {
      romanNumeralUnit: 'L',
      value: 50,
    },
    {
      romanNumeralUnit: 'XL',
      value: 40,
    },
    {
      romanNumeralUnit: 'X',
      value: 10,
    },
    {
      romanNumeralUnit: 'IX',
      value: 9,
    },
    {
      romanNumeralUnit: 'V',
      value: 5,
    },
    {
      romanNumeralUnit: 'IV',
      value: 4,
    },
    {
      romanNumeralUnit: 'I',
      value: 1,
    },
  ]

  const initValue = {
    value: numberValue, // keeps track of the number value as it reduces
    romanNumerals: '' // keeps track of the roman numeral string
  }

  const result = romanNumeralUnits.reduce((acc, item) => {
    acc = convertToRomanNumeralUnits(acc.value, item.value, acc.romanNumerals, item.romanNumeralUnit)
    return acc
  }, initValue)

  return result.romanNumerals
};

