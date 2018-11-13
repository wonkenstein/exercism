//
export const isLeap = (year) => {
  const isDivisibleBy4 = (year % 4 === 0);

  if (isDivisibleBy4) {
    const isDivisibleBy100 = (year % 100 === 0);
    const isDivisibleBy400 = (year % 400 === 0);

    if (!isDivisibleBy100 || isDivisibleBy400) {
      return true;
    }
  }
  return false;
};
