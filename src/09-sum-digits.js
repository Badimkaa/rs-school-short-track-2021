/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits (k) {
  const lengthK = k.toString().length;
  let arr = k.toString().split('').map((el) => +el);
  let res;
  for (let i = 0; i < lengthK; i++) {
    let sum = 0;
    if (sum < 10) {
      arr.forEach((el) => {
        sum += el;
      });
      arr = sum.toString().split('').map((el) => +el);
    }
    res = sum;
  }
  return res;
}

module.exports = getSumOfDigits;
