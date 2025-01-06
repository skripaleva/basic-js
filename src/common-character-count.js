const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let str1 = Array.from(s1);
  let count = 0;
  for (let i = 0; i < s2.length; i +=1) {
    if (str1.includes(s2[i])) {
      for (let j = 0; j < str1.length; j +=1) {
        if (str1[j] === s2[i]) {
          str1.splice(j, 1)
          break
        }
      }
      count +=1
    }
  }
  return count
}

module.exports = {
  getCommonCharacterCount
};
