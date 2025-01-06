const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let arrFromNum = Array.from(n.toString())
  let arr = []

  for (let i = 0; i < arrFromNum.length; i += 1) {
    let copyArr = [...arrFromNum]
    copyArr.splice(i, 1);
    arr.push(+copyArr.join(''))
  }

  return  Math.max(...arr)
}

module.exports = {
  deleteDigit
};
