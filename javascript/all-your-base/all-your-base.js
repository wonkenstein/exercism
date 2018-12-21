//
const isValidBase = base => (base !== undefined && Number.isInteger(base) === true && base > 1);

const inputHasNegativeNumbers = input => (input.filter(item => (item < 0)).length > 0);

const firstUnitisZero = input => (input.length > 1 && input[0] === 0);

const inputIsEmpty = input => (input.length === 0);

const inputHasInvalidPositiveNumbers = (input, base) => (input.filter(item => (item >= base)).length > 0);

const unitsToValue = (units, base) => {
  const convertedValue = units.reverse().map((digit, index) => {
    return digit * (base ** index);
  }).reduce((acc, value) => {
    return acc + value;
  }, 0);

  return convertedValue;
};

const valueToBaseUnits = (inputValue, base) => {
  const output = [];

  do {
    const digit = (inputValue % base);
    output.push(digit);
    inputValue = Math.floor(inputValue / base);
  } while (inputValue > 0);

  return output.reverse();
};

export const convert = (input, inputBase, outputBase) => {
  if (isValidBase(inputBase) === false) {
    throw Error('Wrong input base');
  }
  if (isValidBase(outputBase) === false) {
    throw Error('Wrong output base');
  }

  if (firstUnitisZero(input) || inputHasNegativeNumbers(input)
      || inputIsEmpty(input) || inputHasInvalidPositiveNumbers(input, inputBase)) {
    throw Error('Input has wrong format');
  }

  const inputValue = unitsToValue(input, inputBase);
  const output = valueToBaseUnits(inputValue, outputBase);
  return output;
};
