//
export const solve = (dartX, dartY) => {
  const validInputs = (x, y) => (typeof x === 'number' && typeof y === 'number');

  const isInnerCircle = (x, y) => (x === 0 && y === 0);

  const isMiddleCircle = (x, y) => (x <= 5 && y <= 5);

  const isOuterCircle = (x, y) => (x <= 10 && y <= 10);

  let score = 0;

  if (!validInputs(dartX, dartY)) {
    score = null;
  } else if (isInnerCircle(dartX, dartY)) {
    score = 10;
  } else if (isMiddleCircle(dartX, dartY)) {
    score = 5;
  } else if (isOuterCircle(dartX, dartY)) {
    score = 1;
  }

  return score;
};
