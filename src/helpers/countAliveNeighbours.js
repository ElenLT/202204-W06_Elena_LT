export default function countAliveNeighbours(table, row, column) {
  let alive = 0;
  //newBoard.tableBoard = table
  console.log(table.length);

  if (table[row - 1][column - 1].isAlive === true) {
    alive++;
  }
  if (table[row - 1][column].isAlive === true) {
    alive++;
  }
  if (table[row - 1][column + 1].isAlive === true) {
    alive++;
  }
  if (table[row][column - 1].isAlive === true) {
    alive++;
  }
  if (table[row][column + 1].isAlive === true) {
    alive++;
  }
  if (table[row + 1][column - 1].isAlive === true) {
    alive++;
  }
  if (table[row + 1][column].isAlive === true) {
    alive++;
  }
  if (table[row + 1][column + 1].isAlive === true) {
    alive++;
  }
  return alive;
}
