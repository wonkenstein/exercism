//
const ucFirst = (input) => {
  if (typeof input !== 'string') {
    return input;
  }
  return input.charAt(0).toUpperCase() + input.slice(1);
};

const firstLine = (num) => {
  let bottles;

  if (num === 0) {
    bottles = 'no more bottles';
  } else if (num === 1) {
    bottles = `${num} bottle`;
  } else {
    bottles = `${num} bottles`;
  }

  return `${ucFirst(bottles)} of beer on the wall, ${bottles} of beer.`;
};

const secondLine = (num) => {
  if (num === -1) {
    return 'Go to the store and buy some more, 99 bottles of beer on the wall.';
  }

  let bottles;
  let takeNext;
  if (num === 0) {
    bottles = 'no more bottles';
    takeNext = 'it';
  } else if (num === 1) {
    bottles = `${num} bottle`;
    takeNext = 'one';
  } else {
    bottles = `${num} bottles`;
    takeNext = 'one';
  }

  return `Take ${takeNext} down and pass it around, ${bottles} of beer on the wall.`;
};

export const Beer = {
  sing: (start=99, finish=0) => {
    let count = start;
    const song = [];
    while (count >= finish) {
      song.push(Beer.verse(count));
      count--;
    }

    return song.join("\n");
  },
  verse: (num) => {
    return [
      firstLine(num),
      secondLine(num - 1),
      '',
    ].join("\n");
  },
};
