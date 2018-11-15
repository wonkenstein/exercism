//
export const decode = (sequence) => {
// const decode = (sequence) => {
  let count = '';
  // let currentChar = '';
  const decodedSequence = [];
  sequence.split('').forEach((char) => {
    if (char === '') {
      decodedSequence.push(['', 1]);
    } else if (Number.isNaN(parseInt(char, 10))) {
      if (count === '') {
        decodedSequence.push([char, 1]);
      } else {
        decodedSequence.push([char, parseInt(count, 10)]);
      }
      count = '';
    } else {
      count += char;
    }
  });

  // console.log(decodedSequence);
  const decoded = decodedSequence.map((item) => {
    let s = '';
    for (let i = 0; i < item[1]; i += 1) {
      s += item[0];
    }
    return s;
  });

  return decoded.join('');
  // console.log(decodedSequence);
};


// console.log(decode('XYZ'));
// console.log(decode('2A3B4C'));

export const encode = (sequence) => {
  const encodedSequence = [];
  let currentChar = '';
  let index;
  sequence.split('').forEach((char) => {
    if (char === '') {
      encodedSequence.push(['', 1]);
    } else if (currentChar === char) {
      encodedSequence[index][1] += 1;
    } else {
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
