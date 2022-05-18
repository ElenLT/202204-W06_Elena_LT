import Cell from './Cell.js';

export default class Board {
  constructor(row, column) {
    this.tableBoard = this.createInitialBoard(row, column);
    this.isRunning = false;
  }

  createInitialBoard(initialRow, initialColumn) {
    //dentro de la clase no ponemos la palabra function al crear una función (es un método)
    let initialBoard = new Array(initialRow);

    for (let i = 0; i < initialBoard.length; i++) {
      initialBoard[i] = new Array(initialColumn);
      for (let j = 0; j < initialBoard[i].length; j++) {
        initialBoard[i][j] = new Cell(i, j);
      }
    }

    return initialBoard;
  }
}
