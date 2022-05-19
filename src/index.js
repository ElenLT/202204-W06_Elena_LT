import Cell from './classes/Cell.js';
import Board from './classes/Board.js';
import countAliveNeighbours from './helpers/countAliveNeighbours.js';
export let newBoard = new Board(20, 10);
console.log(newBoard.tableBoard[2 - 1][3 - 1].isAlive);
newBoard.resetBoard();

showBoard();

function showBoard() {
  let showBoard = [...newBoard.tableBoard];
  showBoard = showBoard.map((row) => row.map((item) => item.isAlive));
  console.log(showBoard);
}

//función para click
function makeCellAlive(row, column) {
  newBoard.tableBoard[row][column].isAlive = true;
  console.log(newBoard);
}
makeCellAlive(3, 4);

countAliveNeighbours(newBoard.tableBoard, 3, 4);

console.log(countAliveNeighbours(newBoard.tableBoard, 3, 3));

function start() {}

function randomButtonHandler() {
  for (let i = 0; i < newBoard.tableBoard; i++) {
    for (var j = 0; j < newBoard.tableBoard[i]; j++) {
      var isLive = Math.round(Math.random());
      if (isLive == 1) {
        var cell = document.getElementById(i + '_' + j);
        cell.setAttribute('class', 'live');
        grid[i][j] = 1;
      }
    }
  }
}

function check() {
  for (let row = 1; row <= newBoard.tableBoard.length; row++) {
    for (let column = 1; column <= newBoard.tableBoard[row].length; column++) {
       let neighbours = countAliveNeighbours(newBoard.tableBoard, i, j);
       aliveOrDead(neighbours, newBoard.tableBoard[i][j])
    }
  }
}

function aliveOrDead(neighbours, cell) {
    if (newBoard.tableBoard[i][j].isAlive)
}
