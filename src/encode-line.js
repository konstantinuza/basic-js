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
  let result = '';
  let countChar = str[0];
  let currentChar = 1;

  for (let i = 1; i <= str.length; i++) {
    if (str[i] === countChar) {
      currentChar++;
    } else {
      if (currentChar > 1) {
        result += currentChar;
      }
      result += countChar;
      countChar = str[i];
      currentChar = 1;
    }
  }

  return result;
}

module.exports = {
  encodeLine
};
