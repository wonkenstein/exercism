
const isEmptySpace = tile => (tile === ' ');

const isLastColumn = (col, input) => (col === (input[0].length - 1));
const isFirstColumn = col => (col === 0);
const isFirstRow = row => (row === 0);
const isLastRow = (row, input) => (row === (input.length - 1));


const eTile = (row, col, input) => {
  if (isLastColumn(col, input) === false) {
    return input[row].charAt(col + 1);
  }
};

const wTile = (row, col, input) => {
  if (isFirstColumn(col, input) === false) {
    return input[row].charAt(col - 1);
  }
};

const nTile = (row, col, input) => {
  if (isFirstRow(row) === false) {
    return input[row - 1].charAt(col);
  }
};

const sTile = (row, col, input) => {
  if (isLastRow(row, input) === false) {
    return input[row + 1].charAt(col);
  }
};

const nwTile = (row, col, input) => {
  if (isFirstColumn(col) === false && isFirstRow(row) === false) {
    return input[row - 1].charAt(col - 1);
  }
};

const swTile = (row, col, input) => {
  if (isFirstColumn(col) === false && isLastRow(row, input) === false) {
    return input[row + 1].charAt(col - 1);
  }
};

const neTile = (row, col, input) => {
  if (isLastColumn(col, input) === false && isFirstRow(row) === false) {
    return input[row - 1].charAt(col + 1);
  }
};

const seTile = (row, col, input) => {
  if (isLastColumn(col, input) === false && isLastRow(row, input) === false) {
    return input[row + 1].charAt(col + 1);
  }
};

const incrementMine = (value, numMines) => {
  if (value === '*') {
    numMines++;
  }
  return numMines;
};


const touchesNumberOfMines = (row, col, input) => {
  let num = 0;
  num = incrementMine(eTile(row, col, input), num);
  num = incrementMine(wTile(row, col, input), num);
  num = incrementMine(nTile(row, col, input), num);
  num = incrementMine(sTile(row, col, input), num);
  num = incrementMine(neTile(row, col, input), num);
  num = incrementMine(nwTile(row, col, input), num);
  num = incrementMine(seTile(row, col, input), num);
  num = incrementMine(swTile(row, col, input), num);

  return (num > 0) ? num : ' ';
};

export const annotate = (input) => {
  const board = input.map((row, i) => {
    const cols = row.split('').map((value, j) => {
      if (isEmptySpace(value) === true) {
        return touchesNumberOfMines(i, j, input);
      }
      return value;
    });

    return cols.join('');
  });

  return board;
};
