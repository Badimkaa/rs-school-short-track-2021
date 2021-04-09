/**
 * Given a sorted array, find the index of the element with the given value.
 * Time complexity should be O(logN)
 *
 * @param {Array} array
 * @param {Number} value
 * @return {Number}
 *
 * @example
 * For ([1, 2, 3], 1) should return 0
 * For ([1, 2, 3], 2) should return 1
 * 1, 2, 3, 4, 5   2
 * 1, 2, 3, 4, 5, 6, 7    2
 * 1, 2, 3, 4, 5, 6, 7, 8, 9
 */
function findIndex (arr, num) {
  let res;
  let start = 0;
  let middle;
  let end = arr.length - 1;
  while (!res) {
    middle = Math.floor((start + end) / 2);
    if (arr[middle] === num) {
      res = middle;
      break;
    } else if (arr[middle] < num) {
      start = middle + 1;
    } else {
      end = middle - 1;
    }
  }
  return res;
}

module.exports = findIndex;
