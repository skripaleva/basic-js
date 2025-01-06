const { NotImplementedError } = require('../extensions/index.js');
const {checkForThrowingErrors} = require("../extensions");

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(date) {
  if (!date ) {
    return 'Unable to determine the time of year!';
  }
  if (!(date instanceof Date) || date[Symbol.toStringTag] === 'Date') {
    throw new Error('Invalid date!');
  }
  let season = ''
  let month = date.getMonth();
  if (month === 0 || month === 1 || month === 11 ) {
    season = 'winter'
  } else if (month >= 2 && month < 5 ) {
    season = 'spring'
  } else if (month >= 5 && month < 8 ) {
    season = 'summer'
  } else if (month >= 8 && month < 11 ) {
    season = 'fall'
  }
  return season
}

module.exports = {
  getSeason
};
