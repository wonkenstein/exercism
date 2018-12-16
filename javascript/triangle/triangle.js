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
    if (this.isTriangle() === true) {
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
  }

  hasNegativeLength() {
    const hasIllegalLength = this.lengths.filter(length => (length <= 0));

    if (hasIllegalLength.length) {
      throw new Error('triangle with negative sides are illegal');
    }
  }

  isTriangle() {
    const hasIllegalLength = this.lengths.filter(length => (length <= 0));

    if (hasIllegalLength.length) {
      throw new Error('triangle with negative sides are illegal');
    }

    if ((this.lengths[0] + this.lengths[1]) < this.lengths[2]) {
      throw new Error('Illegal triangle');
    }
    if ((this.lengths[1] + this.lengths[2]) < this.lengths[0]) {
      throw new Error('Illegal triangle');
    }
    if ((this.lengths[2] + this.lengths[3]) < this.lengths[1]) {
      throw new Error('Illegal triangle');
    }

    return true;
  }
}
