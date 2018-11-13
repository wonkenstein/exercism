//
export const reverseString = (value) => {
  // return value.split('').reverse().join('');
  let reversed = '';
  for (let i = (value.length - 1); i >= 0; i--) {
    reversed += value[i];
  }
  return reversed;
};
