// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Determines whether or not you need a license to operate a certain kind of vehicle.
 *
 * @param {string} kind
 * @returns {boolean} whether a license is required
 */
export function needsLicense(kind) {
  // throw new Error('Please implement the needsLicense function');
  const vehicle = kind.toLowerCase();
  return vehicle === "car" || vehicle === "truck";
}

/**
 * Helps choosing between two options by recommending the one that
 * comes first in dictionary order.
 *
 * @param {string} option1
 * @param {string} option2
 * @returns {string} a sentence of advice which option to choose
 */
export function chooseVehicle(option1, option2) {
  // throw new Error("Please implement the chooseVehicle function");
  const ADVICE = "is clearly the better choice.";
  if (option1 < option2) {
    return `${option1} ${ADVICE}`;
  } else {
    return `${option2} ${ADVICE}`;
  }
}

/**
 * Calculates an estimate for the price of a used vehicle in the dealership
 * based on the original price and the age of the vehicle.
 *
 * @param {number} originalPrice
 * @param {number} age
 * @returns {number} expected resell price in the dealership
 */
export function calculateResellPrice(originalPrice, age) {
  // throw new Error("Please implement the calculateResellPrice function");
  // if the vehicle is less than 3 years old,
  // it costs 80% of the original price it had when it was brand new.
  let percentage = 0.8;
  if (age > 10) {
    percentage = 0.5;
  } else if (age >= 3) {
    percentage = 0.7;
  }
  return originalPrice * percentage;

  // If it is more than 10 years old, it costs 50%.
  // If the vehicle is at least 3 years old but not older than 10 years, it costs 70% of the original price.
}
