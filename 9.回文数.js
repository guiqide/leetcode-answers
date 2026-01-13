/*
 * @lc app=leetcode.cn id=9 lang=javascript
 *
 * [9] 回文数
 */

// @lc code=start
/**
 * x在数字范围,不需要考虑超出边界
 * 负数直接返回false
 * 思路：
 * if len % 2 = 0; pre === cur; index = pre || cur - 1;
 * for len ~ index + 1 = str
 * 根据index拆分前、后字符串
 * if (前面字符串 = 反向后面字符串) true
 * 总结：
 * 在实际做的时候发现，其实可以将中位数也放在pre，suf中
 * 偶数时： 0 ~ index - 1， index ~ length
 * 奇数时： 0 ~ index, index ~length
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  if (x < 0) return false;
  const str = x.toString();
  const len = str.length;
  if (len === 1) return true;
  const isEven = str.length % 2 === 0;
  const index = Math.floor(str.length / 2);
  if (isEven && str[index - 1] !== str[index]) {
    return false;
  }
  // 核心的取前缀位置，slice的结尾不包括
  let pre = isEven ? str.slice(0, index) : str.slice(0, index + 1);
  pre = Number(pre);
  let suffix = str.slice(index);
  let sufStr = "";
  for (i = suffix.length - 1; i >= 0; i--) {
    sufStr += suffix[i];
  }
  suffix = Number(sufStr);
  return pre === suffix;
};
// @lc code=end
