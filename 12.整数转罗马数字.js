/*
 * @lc app=leetcode.cn id=12 lang=javascript
 *
 * [12] 整数转罗马数字
 */

// @lc code=start
/**
 * 思路：
 * 躲避难点1：
 * 数字是一位一位转换的，减少了整体看的成本
 * 另外一个解决思路是倒着转换，好处是当数据取%后，数字越来越小，同时罗马字符串字符可以pop前两个
 * 难点2：
 * 1~9的数字，有加有减比较麻烦。最好是生成一个1~9的map。
 * 特例：
 * 10，20，当%的值是0
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
  // 要取romanMap前三个字符
  function generateMap(arr) {
    const digitMap = new Map();
    for (let i = 0; i < 10; i++) {
      if (i < 4) {
        digitMap.set(i, arr[0].repeat(i));
      } else if (i === 4) {
        digitMap.set(i, `${arr[0]}${arr[1]}`);
      } else if (i === 5) {
        digitMap.set(i, arr[1]);
      } else if (i < 9) {
        digitMap.set(i, `${arr[1]}${arr[0].repeat(i - 5)}`);
      } else if (i === 9) {
        digitMap.set(i, `${arr[0]}${arr[2]}`);
      } else if (i === 0) {
        digitMap.set(i, "");
      }
    }
    return digitMap;
  }
  const romanMap = ["I", "V", "X", "L", "C", "D", "M"];
  let n = num;
  let res = "";

  debugger;
  while (n > 0 && romanMap.length > 1) {
    const digitMap = generateMap(romanMap.slice(0, 3));
    if (romanMap.length > 1) {
      romanMap.splice(0, 2);
    }

    const char = n % 10;
    n = Math.floor(n / 10);
    res = digitMap.get(char) + res;
  }
  if (romanMap.length === 1 && n !== 0) {
    res = romanMap[0].repeat(n) + res;
  }
  return res;
};
// @lc code=end
