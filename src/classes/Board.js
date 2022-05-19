import Cell from './Cell.js';

export default class Board {
  constructor(row, column) {
    this.tableBoard = this.createInitialBoard(row, column);
    this.isRunning = false;
  }
  createInitialBoard(initialRow, initialColumn) {
    //dentro de la clase no ponemos la palabra function al crear una función (es un método)
    let initialBoard = new Array(initialRow);

    for (let i = 0; i < initialRow; i++) {
      initialBoard[i] = new Array(initialColumn);
      for (let j = 0; j < initialColumn; j++) {
        initialBoard[i][j] = new Cell(i, j);
      }
    }
    return initialBoard;
  }

  resetBoard() {
    for (let i = 0; i < this.tableBoard.length; i++) {
      for (let j = 0; j < this.tableBoard[i].length; j++) {
        this.tableBoard[i][j].isAlive = false;
      }
      //falta otra condición?
    }
  }
}
