/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 */

// @lc code=start
/**
 * 1：对比前面是否相同，+1
 * 2：对比后面是否相同，+1
 * 3：对比前后是否相同，+2
 * 结束时，left在前面，要回来一位
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  let maxStart = (maxLen = 0);
  for (let i = 0; i < s.length; i++) {
    len = 1;
    let left = i - 1;
    let right = i + 1;
    while (left >= 0 && s[left] === s[i]) {
      left--;
      len++;
    }

    while (right < s.length && s[right] === s[i]) {
      right++;
      len++;
    }

    while (left >= 0 && right < s.length && s[left] === s[right]) {
      left--;
      right++;
      len += 2;
    }
    if (maxLen < len) {
      maxStart = left + 1;
      maxLen = len;
    }
  }
  return s.slice(maxStart, maxStart + maxLen);
};
// @lc code=end
