const { NotImplementedError } = require('../extensions/index.js');

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
  if (!date) {
    return 'Unable to determine the time of year!';
  }

  try {
    date.getTime();
  } catch (err) {
    throw new Error("Invalid date!");
  }

  const seasons = ['winter', 'spring', 'summer', 'autumn'];
  const monthNum = date.getMonth();
  let seasonIndex;
  if (monthNum >= 2 && monthNum <= 4) {
    seasonIndex = 1;
  } else if (monthNum >= 5 && monthNum <= 7) {
    seasonIndex = 2;
  } else if (monthNum >= 8 && monthNum <= 10) {
    seasonIndex = 3;
  } else {
    seasonIndex = 0;
  }

  return seasons[seasonIndex];
}

module.exports = {
  getSeason
};
