/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight (arr) {
  const result = arr;
  for (let i = 0; i < result.length; i++) {
    for (let j = 0; j < result.length; j++) {
      if (result[j] !== -1) {
        let spec;
        let index;
        for (let d = j; d < result.length; d++) {
          if (result[d + 1] !== -1) {
            spec = result[d + 1];
            index = d + 1;
            break;
          }
        }
        let k;
        let t;
        if (result[j] > spec) {
          k = spec;
          t = result[j];
          result[j] = k;
          result[index] = t;
        }
      }
    }
  }
  return result;
}

module.exports = sortByHeight;
