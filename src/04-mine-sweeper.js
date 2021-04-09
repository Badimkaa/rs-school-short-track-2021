/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper (matrix) {
  const newarr = [];
  const subArrLength = matrix[0].length;
  const arr = matrix.flat();
  for (let i = 0; i < arr.length; i++) {
    let count = 0;
    if (i < subArrLength) {
      for (let t = 0; t < i; t++) {
        if (arr[i - 1] !== undefined && arr[i - 1] === true) {
          count++;
        }
      }
    } else {
      for (let j = -4; j < 0; j++) {
        if (arr[i + j] === true) {
          count++;
        }
      }
    }
    for (let j = 1; j < 5; j++) {
      if (arr[i + j] === true) {
        count++;
      }
    }
    newarr.push(count);
  }
  const result = [];
  for (let i = 0; i < Math.ceil(newarr.length / subArrLength); i++) {
    result[i] = newarr.slice(i * subArrLength, i * subArrLength + subArrLength);
  }
  return result;
}

module.exports = minesweeper;
