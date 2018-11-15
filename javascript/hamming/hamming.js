//
export const compute = (strand, strandCompare) => {
  if (strand.length !== strandCompare.length) {
    throw new Error('left and right strands must be of equal length');
  }

  const diff = strand.split('').filter((char, index) => (char !== strandCompare[index]));
  return diff.length;
};
