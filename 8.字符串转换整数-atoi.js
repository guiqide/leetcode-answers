/*
 * @lc app=leetcode.cn id=8 lang=javascript
 *
 * [8] 字符串转换整数 (atoi)
 */

// @lc code=start
/**
 * 字符串可以丢弃空格
 * 转成数字，符号可以比大小
 * 默认为0
 * 超过2*31 -1，则截断，并取最大值或最小值。
 * 返回整数
 * demo:1337c0d3，遇到c则停止读入
 * 思路：
 * 字符串开始，先从字符串截取，忽略空格、正负，下一个非数字后扔掉
 * 转数字后比大小，超过界限则为最大、最小值
 * 返回数字
 * for i
 * i = s.indexOf(' ')
 * s.slice(i)
 * sign = s[i].include[+, -]
 * if s.test([0-9]) then push res
 * Number(res)
 * if res > 2*31 = res = 2*31 else res = -2*31
 * 结论:
 * 尽管有伪代码，还是因为"+-12"调试了半天
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
  let str = s.toString();
  str = str.trim();
  const len = str.length;
  let res = "";
  let sign = "";
  if (["+", "-"].includes(str[0])) {
    sign = str[0];
    str = str.slice(1);
  }
  for (i = 0; i < len; i++) {
    if (!/^[0-9]/.test(str[i])) {
      break;
    }
    res += str[i];
  }
  res = res ? sign + res : "0";
  res = Number(res);
  res = res > Math.pow(2, 31) - 1 ? Math.pow(2, 31) - 1 : res;
  res = res < Math.pow(-2, 31) ? Math.pow(-2, 31) : res;
  return res;
};
// @lc code=end
