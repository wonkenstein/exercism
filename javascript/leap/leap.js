//
export const isLeap = (year) => {
  const divisibleBy4 = year % 4 === 0;
  if (!divisibleBy4) {
    return false;
  }

  const divisibleBy100 = year % 100 === 0;
  if (!divisibleBy100) {
    return true;
  }

  const divisibleBy400 = year % 400 === 0;
  if (!divisibleBy400) {
    return false;
  }

  return true;
};

// export const isLeap = (year) => {
//   return (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0));
// };
