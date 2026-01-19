/*
 * @lc app=leetcode.cn id=13 lang=javascript
 *
 * [13] 罗马数字转整数
 */

// @lc code=start
/**
 * 思路，跟12题类似
 * 区别1：
 * 不用%，而是匹配后*10，
 * 区别2：
 * 需要倒着匹配字符串相等,匹配后去掉这部分
 * 匹配到多个可能性时，应该选择最长的
 * 之所以可以这样配的原则是不会出现上一位的数值用1，或者5的罗马字符
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  function generateMap(arr) {
    const digitMap = new Map();
    for (let i = 1; i <= 10; i++) {
      if (i < 4) {
        digitMap.set(arr[0].repeat(i), i);
      } else if (i === 4) {
        digitMap.set(`${arr[0]}${arr[1]}`, i);
      } else if (i === 5) {
        digitMap.set(arr[1], i);
      } else if (i < 9) {
        digitMap.set(`${arr[1]}${arr[0].repeat(i - 5)}`, i);
      } else if (i === 9) {
        digitMap.set(`${arr[0]}${arr[2]}`, i);
      } else if (i === 10) {
        digitMap.set(`${arr[2]}`, i);
      }
    }
    return digitMap;
  }

  let str = s;
  const romanMap = ["I", "V", "X", "L", "C", "D", "M"];
  let maxChar = "";
  while (str.length > 0) {
    const digitMap = generateMap(romanMap.slice(0, 3));
    if (romanMap.length > 1) {
      romanMap.splice(0, 2);
    }
  }
};
// @lc code=end
