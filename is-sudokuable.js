const _ = require('lodash');

const rowsAreSudoku = arr => {
  let isValid = true;
  arr.forEach(row => {
    let rowArr = [];
    row.forEach(num => {
      rowArr.push(num);
    })
    if (_.uniq(rowArr).length !== rowArr.length)
      isValid = false;
  })
  return isValid;
}

const columnsAreSudoku = arr => {
  return rowsAreSudoku(arr[0].map((col, i) => arr.map(row => row[i])));
}

const boxesAreSudoku = arr => {
  let isValid = true;

  for (let a = 0; a < 9; a+= 3) {
    for (let b = 0; b < 9; b+= 3) {
      let newArr = [];
      for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
          newArr.push(arr[a+i][b+j])
        }
      }
      if (_.uniq(newArr).length !== newArr.length)
        isValid = false;
    }
  }
  return true;
}


const isSudokuable = arr => {
  return rowsAreSudoku(arr) && columnsAreSudoku(arr) && boxesAreSudoku(arr);
}

const arr = [
  [5,3,4,6,7,8,9,1,2],
  [6,7,2,1,9,5,3,4,8],
  [1,9,8,3,4,2,5,6,7],
  [8,5,9,7,6,1,4,2,3],
  [4,2,6,8,5,3,7,9,1],
  [7,1,3,9,2,4,8,5,6],
  [9,6,1,5,3,7,2,8,4],
  [2,8,7,4,1,9,6,3,5],
  [3,4,5,2,8,6,1,7,9]
];

console.log(isSudokuable(arr));
