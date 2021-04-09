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
  const somearr = n.toString().split('');
  const numArr = somearr.map((el) => +el);
  let min = numArr[0];
  numArr.map((el) => {
    if (el < min) {
      min = el;
    }
    return min;
  });
  const indexMin = numArr.indexOf(min);
  numArr.splice(indexMin, 1);
  const y = numArr.join('');
  const result = +y;
  return result;
}
module.exports = deleteDigit;
