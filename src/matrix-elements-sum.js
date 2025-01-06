const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let sum = 0;
  let nulls = [];
  matrix.forEach(arr => {
    arr.forEach((num, i) => {
      if (num === 0) {
        nulls.push(i)
      }
      if (!nulls.includes(i)) {
        sum += num;
      }
    })
  })
  return sum
}

module.exports = {
  getMatrixElementsSum
};
