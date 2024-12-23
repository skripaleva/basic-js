const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new NotImplementedError('\'arr\' parameter must be an instance of the Array!');
  }
  let res = [];
  let discardNext = false;
  let doubleNext = false;
  let prev = false;
  arr.forEach((elem, i) => {
    if (elem !== '--discard-next' && elem !== '--discard-prev' && elem !== '--double-next' && elem !== '--double-prev') {
      if (!discardNext) {
        res.push(elem);
        prev = elem
      } else {
        discardNext = false;
        prev = false;
      }
      if (doubleNext) {
        res.push(elem);
        doubleNext = false;
      }
    } else if (elem === '--discard-next') {
      discardNext = true;
    } else if (elem === '--discard-prev' && prev) {
      res.pop()
    } else if (elem === '--double-next') {
      doubleNext = true;
    } else if (elem === '--double-prev') {
      if (prev) res.push(prev)
    }


  })
  return res;
}

module.exports = {
  transform
};
