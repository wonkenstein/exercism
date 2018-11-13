//
export const toRna = (dnaSequqnce) => {
  const dnaToRna = {
    G: 'C',
    C: 'G',
    T: 'A',
    A: 'U',
  };

  const rna = dnaSequqnce.split('').map((char) => {
    if (dnaToRna[char] === undefined) {
      throw new Error('Invalid input DNA.');
    }
    return dnaToRna[char];
  });

  return rna.join('');
};
