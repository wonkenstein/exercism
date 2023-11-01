// @ts-check

/**
 * Implement the classes etc. that are needed to solve the
 * exercise in this file. Do not forget to export the entities
 * you defined so they are available for the tests.
 */

export class Size {
  constructor(width = 80, height = 60) {
    this.width = this.lowerBoundValue(width);
    this.height = this.lowerBoundValue(height);
  }

  lowerBoundValue(value) {
    return value > 0 ? value : 1;
  }

  resize(width, height) {
    this.width = this.lowerBoundValue(width);
    this.height = this.lowerBoundValue(height);
  }
}

export class Position {
  constructor(x = 0, y = 0) {
    this.x = this.lowerBoundValue(x);
    this.y = this.lowerBoundValue(y);
  }

  lowerBoundValue(value) {
    return value >= 0 ? value : 0;
  }

  move(x, y) {
    this.x = this.lowerBoundValue(x);
    this.y = this.lowerBoundValue(y);
  }
}

export class ProgramWindow {
  MAX_WIDTH = 800;
  MAX_HEIGHT = 600;

  constructor() {
    this.size = new Size();
    this.screenSize = new Size(this.MAX_WIDTH, this.MAX_HEIGHT);
    this.position = new Position();
  }

  resize(newSize) {
    this.size = newSize;
    // const maxWidth = this.screenSize.width - this.position.x;
    // const maxHeight = this.screenSize.width - this.position.y;

    // let width = this.position.x;
    // if (width > maxWidth) {
    //   width = maxWidth;
    // }

    // let height = this.position.y;
    // if (height > maxHeight) {
    //   height = maxHeight;
    // }

    // if (width !== newSize.width || height !== newSize.height) {
    //   newSize = new Size(width, height);
    // }

    // this.size = newSize;
  }

  move(newPosition) {
    const maxX = this.screenSize.width - this.size.width;
    const maxY = this.screenSize.height - this.size.height;

    let x = newPosition.x;
    if (x > maxX) {
      x = maxX;
    }

    let y = newPosition.y;
    if (y > maxY) {
      y = maxY;
    }

    if (x !== newPosition.x || y !== newPosition.y) {
      newPosition = new Position(x, y);
    }

    this.position = newPosition;
  }
}

export const changeWindow = (programWindow) => {
  programWindow.resize(new Size(400, 300));
  programWindow.move(new Position(100, 150));
  return programWindow;
};
