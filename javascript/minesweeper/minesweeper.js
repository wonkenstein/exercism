
const isEmptySpace = tile => (tile === ' ');

const isLastColumn = (col, input) => (col === (input[0].length - 1));
const isFirstColumn = col => (col === 0);
const isFirstRow = row => (row === 0);
const isLastRow = (row, input) => (row === (input.length - 1));

const eTile = (row, col, input) => {
  return (!isLastColumn(col, input)) ? input[row].charAt(col + 1) : null;
};

const wTile = (row, col, input) => {
  return (!isFirstColumn(col, input)) ? input[row].charAt(col - 1) : null;
};

const nTile = (row, col, input) => {
  return (!isFirstRow(row)) ? input[row - 1].charAt(col) : null;
};

const sTile = (row, col, input) => {
  return (!isLastRow(row, input)) ? input[row + 1].charAt(col) : null;
};

const nwTile = (row, col, input) => {
  return (!isFirstColumn(col) && !isFirstRow(row)) ? input[row - 1].charAt(col - 1) : null;
};

const swTile = (row, col, input) => {
  return (!isFirstColumn(col) && !isLastRow(row, input)) ? input[row + 1].charAt(col - 1) : null;
};

const neTile = (row, col, input) => {
  return (!isLastColumn(col, input) && !isFirstRow(row)) ? input[row - 1].charAt(col + 1) : null;
};

const seTile = (row, col, input) => {
  return (!isLastColumn(col, input) && !isLastRow(row, input)) ? input[row + 1].charAt(col + 1) : null;
};

const isMine = value => value === '*';

const touchesNumberOfMines = (row, col, input) => {
  const grid = [
    eTile(row, col, input),
    wTile(row, col, input),
    nTile(row, col, input),
    sTile(row, col, input),
    neTile(row, col, input),
    nwTile(row, col, input),
    seTile(row, col, input),
    swTile(row, col, input),
  ];

  const numMines = grid.reduce((acc, tile) => {
    return (isMine(tile)) ? (acc + 1) : acc;
  }, 0);

  return (numMines > 0) ? numMines : ' ';
};

const numberOfMines = (value, i, j, input) => {
  if (isEmptySpace(value) === true) {
    return touchesNumberOfMines(i, j, input);
  }
  return value;
};

export const annotate = (input) => {
  const board = input.map((row, i) => {
    const cols = row.split('').map((value, j) => numberOfMines(value, i, j, input));
    return cols.join('');
  });

  return board;
};
