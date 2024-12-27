const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let { repeatTimes, separator, addition, additionRepeatTimes, additionSeparator } = options;
  if (addition === null) {
    addition = 'null'
  }
  let additionArray = []
  if (additionRepeatTimes) {
    for (let i = 0; i < additionRepeatTimes; i+=1 ) {
      additionArray.push(addition);
    }
  } else {
    additionArray.push(addition);
  }
  let strWithAddition = str + additionArray.join(additionSeparator || '|')
  let resArray =[];
  if (repeatTimes) {
    for (let i = 0; i < repeatTimes; i+=1 ) {
      resArray.push(strWithAddition);
    }
  } else {
    resArray.push(strWithAddition);
  }

  return resArray.join(separator || '+');
}

module.exports = {
  repeater
};
