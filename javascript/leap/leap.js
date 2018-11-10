//
// This is only a SKELETON file for the 'Hello World' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isLeap = (year) => {
  const isDivisibleBy4 = (year % 4 === 0);

  if (isDivisibleBy4 === true) {
    const isDivisibleBy100 = (year % 100 === 0);
    const isDivisibleBy400 = (year % 400 === 0);

    if (isDivisibleBy100 === true && isDivisibleBy400 === false) {
      return false;
    }

    return true;
  }
  return false;
};
