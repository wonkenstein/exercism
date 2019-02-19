//
export const gigasecond = (start) => {
  const birthDate = Date.parse(start); // convert to milliseconds
  const timeToLive = 1000000000 * 1000; // milliseconds

  const finishDate = new Date(birthDate + timeToLive);
  return finishDate;
};
