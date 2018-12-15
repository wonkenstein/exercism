//
export class Raindrops {
  constructor() {

  }

  convert(inputNumber) {
    const converted = [];

    if (inputNumber % 3 === 0) {
      converted.push('Pling');
    }
    if (inputNumber % 5 === 0) {
      converted.push('Plang');
    }
    if (inputNumber % 7 === 0) {
      converted.push('Plong');
    }

    if (converted.length === 0) {
      converted.push(inputNumber);
    }

    return converted.join('');
  }
}
