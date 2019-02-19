//
export const gigasecond = (start) => {
  // start is a Date object
  const GIGASECOND_IN_MS = 10 ** 12; // Math.pow(10, 12);
  const finishDate = new Date(start.getTime() + GIGASECOND_IN_MS);
  return finishDate;
};
