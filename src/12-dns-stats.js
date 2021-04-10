/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats (domains) {
  const arr = domains.map((el) => el.split('.').reverse());
  const obj = {};
  let t;
  arr.forEach((el) => {
    t = '';
    el.forEach((item) => {
      if (obj[`${t}.${item}`] !== undefined) {
        obj[`${t}.${item}`] += 1;
      } else {
        obj[`${t}.${item}`] = 1;
      }
      t = `${t}.${item}`;
    });
  });
  return obj;
}

module.exports = getDNSStats;
