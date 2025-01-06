const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let arr = [];
  let prev = '';
  let obj = {}

  for (let i = 0; i <= str.length; i++) {
    if ( i === str.length) {
      arr.push(obj);
    } else {
      if (str[i] === prev) {
        obj[str[i]]++;
      } else {
        if (Object.keys(obj).length !== 0) {
          arr.push(obj);
          obj = {}
        }
        obj[str[i]] = 1
      }
      prev = str[i];
    }
  }

  let res = ''

  arr.forEach(obj => {
    Object.entries(obj).forEach(function([key, value]) {
      res += (value > 1 ? value : '') + key;
    });
  })

  return res;
}

module.exports = {
  encodeLine
};
