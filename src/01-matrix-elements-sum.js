/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  const subArrLength = matrix[0].length;
  const arr = matrix.flat();
  let count = 0;
  arr.forEach((el, index) => {
    if (el !== 0) {
      let flag = true;
      for (let i = index; i >= subArrLength; i -= subArrLength) {
        if (arr[i - subArrLength] === 0) {
          flag = false;
          break;
        }
      }
      if (flag) {
        count += el;
      }
    }
  });
  return count;
}

module.exports = getMatrixElementsSum;
