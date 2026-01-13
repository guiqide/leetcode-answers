/*
 * @lc app=leetcode.cn id=6 lang=javascript
 *
 * [6] Z 字形变换
 */

// @lc code=start
/**
 * 解法1：通过计算间距的方法，发现在中间行时，下一个位置的间距是变化的,找规律有点麻烦，还是用二维数组
 * 解法2：Z子掉头算法是核心
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
  let arr = [];
  let str = "";
  let direction = 0;
  for (let i = 0; i < numRows; i++) {
    arr.push([]);
  }
  let len = 0;
  for (let i = 0; i < s.length; i++) {
    // 1: 顺序很重要：先push，再转向
    arr[len].push(s[i]);
    const changeDir = numRows - 1;
    if (numRows > 1) {
      // 转向时机是列的数量 - 1: [0, 1, 2, 1, 0] = [_, 1, 1, -1, -1]
      direction = Math.floor(i / changeDir) % 2 === 0 ? 1 : -1;
    }
    len += direction;
  }
  for (let i = 0; i < numRows; i++) {
    str += arr[i].join("");
  }
  return str;
};
// @lc code=end
