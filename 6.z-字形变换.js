/*
 * @lc app=leetcode.cn id=6 lang=javascript
 *
 * [6] Z 字形变换
 */

// @lc code=start
/**
 * 解法1：通过计算间距的方法，发现在中间行时，下一个位置的间距是变化的,找规律有点麻烦，还是用二维数组
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
  let arr = [];
  let str = "";
  let goUp = false;
  let goDown = true;
  for (let i = 0; i < numRows; i++) {
    arr.push([]);
  }
  let len = 0;
  for (let i = 0; i < s.length; i++) {
    arr[len].push(s[i]);
    if (len < numRows - 1 && goDown) {
      len++;
    } else if (len > numRows - 1 && goUp) {
      len--;
    }
    if (len >= numRows - 1 && goDown) {
      goDown = false;
      goUp = true;
    } else if (len <= 0 && goUp) {
      goDown = true;
      goUp = false;
    }
  }
  for (let i = 0; i < numRows; i++) {
    console.log("arr[i]:", i, arr[i].join(""));
    str += arr[i].join("");
  }
  return str;
};
// @lc code=end
