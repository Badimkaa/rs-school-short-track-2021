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
function encodeLine (str) {
  const arr = str.split('');
  const newarr = [];
  let sym = 1;
  arr.forEach((el, index) => {
    if (el === arr[index + 1]) {
      sym += 1;
    } else if (el !== arr[index + 1]) {
      if (sym > 1) {
        newarr.push(sym);
        newarr.push(el);
        sym = 1;
      } else if (sym === 1) {
        newarr.push(el);
      }
    }
  });
  const res = newarr.join('');
  return res;
}

module.exports = encodeLine;
