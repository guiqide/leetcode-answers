/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let maxLen = 0;
  let index = 0;
  let currStr = "";
  while (index < s.length) {
    if (currStr.includes(s[index])) {
      const i = currStr.indexOf(s[index]);
      currStr = currStr.slice(i + 1);
    }
    currStr += s[index];
    maxLen = Math.max(maxLen, currStr.length);
    index++;
  }

  return maxLen;
};
// @lc code=end
