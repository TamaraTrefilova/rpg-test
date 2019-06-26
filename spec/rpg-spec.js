// import { SudokuCheck } from './../src/sudoku-checker.js';

// describe('SudokuCheck', function() {
//
//   var board;
//
//   beforeEach(function() {
//     //---losing board
//     // board = new SudokuCheck([[1, 2, 3, 4, 5, 6, 7, 8, 9],
//     //                                       [1, 2, 3, 4, 5, 6, 7, 8, 9],
//     //                                       [1, 2, 3, 4, 5, 6, 7, 8, 9],
//     //                                       [1, 2, 3, 4, 5, 6, 7, 8, 9],
//     //                                       [1, 2, 3, 4, 5, 6, 7, 8, 9],
//     //                                       [1, 2, 3, 4, 5, 6, 7, 8, 9],
//     //                                       [1, 2, 3, 4, 5, 6, 7, 8, 9],
//     //                                       [1, 2, 3, 4, 5, 6, 7, 8, 9],
//     //                                       [1, 2, 3, 4, 5, 6, 7, 8, 9]]);
//
//     //---winning board
//     board = new SudokuCheck([[1, 5, 4, 8, 7, 3, 2, 9, 6],
//                             [3, 8, 6, 5, 9, 2, 7, 1, 4],
//                             [7, 2, 9, 6, 4, 1, 8, 3, 5],
//                             [8, 6, 3, 7, 2, 5, 1, 4, 9],
//                             [9, 7, 5, 3, 1, 4, 6, 2, 8],
//                             [4, 1, 2, 9, 6, 8, 3, 5, 7],
//                             [6, 3, 1, 4, 5, 7, 9, 8, 2],
//                             [5, 9, 8, 2, 3, 6, 4, 7, 1],
//                             [2, 4, 7, 1, 8, 9, 5, 6, 3]]);
//   });
//
//   it('should test whether any row contains all numbers from 1 to 9 with no repeats', function() {
//
//     for(var i = 0; i < board.spaces.length; i++){
//       for(var j = 0; j < board.spaces[0].length; j++){
//         for(var k = j + 1; k < board.spaces[0].length; k++){
//         expect(board.spaces[i][j]).not.toEqual(board.spaces[i][k]);
//         console.log(board.spaces[i][j] + " compare " + board.spaces[i][k]);
//         }
//       }
//     }
//   });
//
//   it('should test whether any column contains all numbers from 1 to 9 with no repeats', function() {
//
//     for(var i = 0; i < board.spaces.length; i++){
//       for(var j = 0; j < board.spaces[0].length; j++){
//         for(var k = j + 1; k < board.spaces[0].length; k++){
//         expect(board.spaces[j][i]).not.toEqual(board.spaces[k][i]);
//         console.log(board.spaces[j][i] + " compare " + board.spaces[k][i]);
//         }
//       }
//     }
//   });
//
// });
