//
export const steps = (input, step = 0) => {
  let inputNum = parseInt(input, 10);

  if (inputNum < 1 || Number.isNaN(inputNum)) {
    throw new Error('Only positive numbers are allowed');
  } else if (inputNum === 1) {
    return step;
  }
  if (inputNum % 2 === 0) {
    inputNum /= 2;
  } else {
    inputNum = (3 * inputNum) + 1;
  }
  inputNum = parseInt(inputNum, 10);

  return steps(inputNum, (step + 1));
};

export const steps2 = (input) => {
  let inputNum = parseInt(input, 10);

  if (inputNum < 1 || Number.isNaN(inputNum)) {
    throw new Error('Only positive numbers are allowed');
  }

  let step = 0;
  while (inputNum !== 1) {
    if (inputNum % 2 === 0) {
      inputNum /= 2;
    } else {
      inputNum = (3 * inputNum) + 1;
    }
    inputNum = parseInt(inputNum, 10);
    step += 1;
  }

  return step;
};
