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
  const nArr = n.toString().split('');
  let spliceIndex = nArr.length - 1;
  for (let i = 0; i < nArr.length - 1; i++) {
    if (nArr[i] < nArr[i + 1]) {
      spliceIndex = i;
      break;
    }
  }
  nArr.splice(spliceIndex, 1);
  return parseFloat(nArr.join(''));
}

module.exports = {
  deleteDigit
};
