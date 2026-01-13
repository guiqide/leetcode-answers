/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 */

// @lc code=start
/**
 * 这题我用了字符串转换
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  let str = x.toString();
  debugger;

  let res = "";
  let sign;
  if (["+", "-"].includes(str[0])) {
    sign = str[0];
    str = str.slice(1);
  }

  const len = str.length;
  for (i = len - 1; i >= 0; i--) {
    res += str[i];
  }
  if (sign) {
    res = sign + res;
  }
  res = Number(res);
  if (res > Math.pow(2, 31) - 1 || res < Math.pow(-2, 31)) {
    res = 0;
  }
  return res;
};
// @lc code=end
