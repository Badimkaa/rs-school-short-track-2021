/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const x = s1.split('').sort();
  const y = s2.split('').sort();
  let count = 0;
  const xobj = {};
  for (let i = 0; i < x.length; i++) {
    if (xobj[x[i]] !== undefined) {
      xobj[x[i]]++;
    } else {
      xobj[x[i]] = 1;
    }
  }
  const yobj = {};
  for (let i = 0; i < x.length; i++) {
    if (yobj[y[i]] !== undefined) {
      yobj[y[i]]++;
    } else {
      yobj[y[i]] = 1;
    }
  }
  const xobjlenth = Object.keys(xobj).length;
  const yobjlenth = Object.keys(yobj).length;
  if (xobjlenth <= yobjlenth) {
    for (let i = 0; i < xobjlenth; i++) {
      if (Object.keys(xobj).includes(Object.keys(yobj)[i])) {
        if (Object.values(xobj)[i] < Object.values(yobj)[i]) {
          count += Object.values(xobj)[i];
        } else {
          count += Object.values(yobj)[i];
        }
      }
    }
  } else {
    for (let i = 0; i < yobjlenth; i++) {
      if (Object.keys(yobj).includes(Object.keys(xobj)[i])) {
        if (Object.values(xobj)[i] < Object.values(yobj)[i]) {
          count += Object.values(xobj)[i];
        } else {
          count += Object.values(yobj)[i];
        }
      }
    }
  }
  return count;
}

module.exports = getCommonCharacterCount;
