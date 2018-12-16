//
export class Triangle {
  constructor(length1, length2, length3) {
    this.lengths = [
      length1,
      length2,
      length3,
    ];
  }

  kind() {
    if (this.hasIllegalLength() !== false) {
      throw new Error('triangle has illegal length');
    }

    if (this.isValidTriangle() !== true) {
      throw new Error('triangle is fails triangle inequality');
    }

    const diffLengths = this.lengths.reduce((acc, length) => {
      acc[length] = length;
      return acc;
    }, {});

    const numberOfDiffLengths = Object.keys(diffLengths).length;

    let typeOfTriangle = '';
    if (numberOfDiffLengths === 1) {
      typeOfTriangle = 'equilateral';
    } else if (numberOfDiffLengths === 2) {
      typeOfTriangle = 'isosceles';
    } else if (numberOfDiffLengths === 3) {
      typeOfTriangle = 'scalene';
    }

    return typeOfTriangle;
  }

  hasIllegalLength() {
    const hasIllegalLength = this.lengths.filter(length => (length <= 0));

    if (hasIllegalLength.length) {
      return true;
    }

    return false;
  }

  isValidTriangle() {
    let isTriangle = true;
    if ((this.lengths[0] + this.lengths[1]) < this.lengths[2]) {
      isTriangle = false;
    }
    if ((this.lengths[1] + this.lengths[2]) < this.lengths[0]) {
      isTriangle = false;
    }
    if ((this.lengths[2] + this.lengths[3]) < this.lengths[1]) {
      isTriangle = false;
    }

    return isTriangle;
  }
}
