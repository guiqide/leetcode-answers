/*
 * @lc app=leetcode.cn id=10 lang=javascript
 *
 * [10] 正则表达式匹配
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 * 要求：
 * 长度小于21
 * 返回bool
 * 要求完整匹配
 * 思路：
 * 用动态规划做，先初始化动态规划矩阵
 * 遇到难点：
 * 1、当前匹配，则星号不起效，当前不匹配，看下是否是之前的c*
 * 2、p需要一个自己的下标，而不是直接用i,举个例子s=aab，p=c*a*b
 */
var isMatch = function (s, p) {
  const str = s;
  const sLen = s.length;
  const pLen = p.length;
  const len = sLen + pLen;
  debugger;
  dp = Array.from({ length: len }, () => Array(len).fill(false));
  dp[0][0] = true;
  for (let j = 1; j < pLen + 1; j++) {
    if (p[j - 1] === "*") {
      dp[0][j] = dp[0][j - 2];
    }
  }

  for (let i = 1; i < sLen + 1; i++) {
    for (let j = 1; j < pLen + 1; j++) {
      if (s[i - 1] === p[j - 1] || p[j - 1] === ".") {
        dp[i][j] = dp[i - 1][j - 1];
      } else if (p[j - 1] === "*") {
        if (s[i - 1] === p[j - 2] || p[j - 2] === ".") {
          dp[i][j] = dp[i][j - 2] || dp[i - 1][j - 2] || dp[i - 1][j];
        } else {
          dp[i][j] = dp[i][j - 2];
        }
      }
    }
  }

  return dp[sLen][pLen];
};

// @lc code=end
