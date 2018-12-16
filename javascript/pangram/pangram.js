//
export const isPangram = (sentence) => {
  const letters = 'abcdefghijklmnopqrstuvwxyz';
  sentence = sentence.toLowerCase();

  const missingLetters = Array.from(letters).filter(char => (sentence.indexOf(char) === -1));

  return (missingLetters.length === 0);
};
