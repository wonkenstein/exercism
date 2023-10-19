// @ts-check

/**
 * Calculates the sum of the two input arrays.
 *
 * @param {number[]} array1
 * @param {number[]} array2
 * @returns {number} sum of the two arrays
 */
export function twoSum(array1, array2) {
  const num1 = Number(array1.join(""));
  const num2 = Number(array2.join(""));
  return num1 + num2;
}

/**
 * Checks whether a number is a palindrome.
 *
 * @param {number} value
 * @returns {boolean} whether the number is a palindrome or not
 */
export function luckyNumber(value) {
  const numbers = String(value).split("");
  const length = numbers.length;

  for (let i = 0; i < length / 2; i++) {
    const start = numbers[i];
    const end = numbers[length - 1 - i];
    if (start !== end) {
      return false;
    }
  }
  return true;
}

/**
 * Determines the error message that should be shown to the user
 * for the given input value.
 *
 * @param {string|null|undefined} input
 * @returns {string} error message
 */
export function errorMessage(input) {
  const numberInput = Number(input);
  console.log("[", input, "]==[", numberInput);
  if (!input) {
    return "Required field";
  } else if (isNaN(numberInput) || numberInput === 0) {
    return "Must be a number besides 0";
  }
  return "";
}
