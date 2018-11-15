//
// split sequence into chunks [[charA, count], [charB, count]]
export const decode = (sequence) => {
  const decodedSequence = [];
  let count = '';
  sequence.split('').forEach((char) => {
    if (Number.isNaN(parseInt(char, 10))) {
      if (count === '') {
        // default count of 1
        decodedSequence.push([char, 1]);
      } else {
        // next character in sequence
        decodedSequence.push([char, parseInt(count, 10)]);
        count = '';
      }
    } else {
      // store the count
      count += char;
    }
  });

  const decoded = decodedSequence.map((item) => {
    let s = '';
    for (let i = 0; i < item[1]; i += 1) {
      s += item[0];
    }
    return s;
  });

  return decoded.join('');
};


// split sequence into chunks [[charA, count], [charB, count]]
export const encode = (sequence) => {
  const encodedSequence = [];
  let currentChar = '';
  let index;
  sequence.split('').forEach((char) => {
    if (currentChar === char) {
      // store the count
      encodedSequence[index][1] += 1;
    } else {
      // next character in sequence
      encodedSequence.push([char, 1]);
      currentChar = char;
      index = encodedSequence.length - 1;
    }
  });


  const encoded = encodedSequence.map((item) => {
    if (item[1] > 1) {
      return `${item[1]}${item[0]}`;
    }
    return item[0];
  });
  return encoded.join('');
};
