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
  const m = s.length;
  const n = p.length;

  function matches(i, j) {
    if (i === 0) return false;
    if (p[j - 1] === ".") return true;
    return s[i - 1] === p[j - 1];
  }

  const f = Array.from({ length: m + 1 }, () => Array(n + 1).fill(false));

  f[0][0] = true;

  for (let i = 0; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (p[j - 1] === "*") {
        // 不使用 *
        f[i][j] = f[i][j] || f[i][j - 2];

        // 使用 *
        if (matches(i, j - 1)) {
          f[i][j] = f[i][j] || f[i - 1][j];
        }
      } else {
        if (matches(i, j)) {
          f[i][j] = f[i][j] || f[i - 1][j - 1];
        }
      }
    }
  }

  return f[m][n];
};

// @lc code=end
