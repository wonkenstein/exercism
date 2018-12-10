//
export const isPangram = (sentence) => {
  const letters = 'abcdefghijklmnopqrstuvwxyz';

  const lettersCount = letters.split('').reduce((acc, letter) => {
    acc[letter] = 0;
    return acc;
  }, {});

  // go thru thru the sentence and cheeck count of each letter
  sentence.split('').forEach((char) => {
    const letter = char.toLowerCase();
    if (lettersCount[letter] !== undefined) {
      lettersCount[letter]++;
    }
  });

  const zeroCounts = letters.split('').filter(letter => (lettersCount[letter] < 1));

  return (zeroCounts.length === 0);
};
