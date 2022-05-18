import Cell from './classes/Cell.js';
import Board from './classes/Board.js';

let nuevaCelula = new Cell(3, 4);
console.log(nuevaCelula);

let nuevoTablero = new Board(20, 10);

showBoard();

function showBoard() {
  let holi = [...nuevoTablero.tableBoard];

  holi = holi.map((row) => row.map((item) => item.isAlive));

  console.log(holi);
}
