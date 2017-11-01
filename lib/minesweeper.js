'use strict';

var generatePlayerBoard = function generatePlayerBoard(numberOfRows, numberOfColumns) {
  var board = [];

  for (var rowIndex = 0; rowIndex < numberOfRows.length; rowIndex++) {
    var row = [];
    for (var columnIndex = 0; columnIndex < numberOfColumns.length; columnIndex++) {
      row.push(' ');
    }
  }
  return board;
};

generatePlayerBoard(board(2, 3));
console.log("This is my: " + board);

var printBoard = function printBoard(board) {
  console.log('Current Board: ');
  console.log(board[0].join(' | '));
  console.log(board[1].join(' | '));
  console.log(board[2].join(' | '));
};

var board = [[' ', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']];

printBoard(board);

board[0][1] = '1';
board[2][2] = 'B';

printBoard(board);