//
export class Triangle {
  constructor(length1, length2, length3) {
    this.sides = [
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

    const diffLengths = this.sides.reduce((acc, length) => {
      acc[length] = length;
      return acc;
    }, {});

    const numDiffLengths = Object.keys(diffLengths).length;

    const triangleType = {
      1: 'equilateral',
      2: 'isosceles',
      3: 'scalene',
    };

    return triangleType[numDiffLengths];
  }

  hasIllegalLength() {
    return (this.sides.filter(length => (length <= 0)).length > 0);
  }

  isValidTriangle() {
    return ((this.sides[0] + this.sides[1]) > this.sides[2])
      && ((this.sides[1] + this.sides[2]) > this.sides[0])
      && ((this.sides[2] + this.sides[0]) > this.sides[1]);
  }
}
