/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other

// input number
// output matrix: array of arrays (Board object)
// constraints: none
// edge cases: none


window.findNRooksSolution = function(n) {
  //var solution = undefined;
  // assign solution to new Board of size n
  var solution = new Board({n: n});
  // define number of rooks placed as 0
  var rooks = 0;
  // define an inner set function addRook(row, column)
  var addRook = function (row, col) {
    // check if rooks < n
    if (rooks === n) {
      // set current house to 1
      console.log('solution before set', solution);
      console.log('solution after set', solution);
      return;
    }
    var currentRow = solution.get(row);
    currentRow[col] = 1;
    solution.set(row, currentRow);

    // check if current row has row conflict
    if (solution.hasRowConflictAt(row)) {
      // if it does, set current house to 0
      currentRow[col] = 0;
      solution.set(row, currentRow);
      // invoke addRook(next row, same column)
      addRook(row+1, col);
    }

    // check if current column has column conflict
    if (solution.hasColConflictAt(col)) {
      // if it does, set current house to 0
      currentRow[col] = 0;
      solution.set(row, currentRow);
      // invoke addRook(same row, next column)
      addRook(row, col+1);

    }


    // increment rooks
    rooks +=1;
    console.log('rooks', rooks);

  };

  //define row and col and set them to 0
  var row = 0;
  var col = 0;
  // iterate from 0 to n (i)
  for (var i = 0; i < n; i++) {
    // invoke addRooks(row, column)
    addRook(row, col);
    // col++
    col ++;

  }
  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  console.log('solution', solution);

  delete solution.attributes.n;
  solution = solution.attributes;
  var testArr = [];
  for (var key in solution) {
    testArr.push(solution[key]);
  }
  console.log('testArr', testArr);
  return testArr;

};

//test :


// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = undefined; //fixme

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
