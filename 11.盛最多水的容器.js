/*
 * @lc app=leetcode.cn id=11 lang=javascript
 *
 * [11] 盛最多水的容器
 */

// @lc code=start
/**
 * 求一个最大值，公式是f(max) = abs(j - i) * min(x[i], x[j])
 * i,j是两条线的下标
 * 最简单的实现方案是O(n)2
 * 实现方法1：
   for (let i = 0; i < len - 1; i++) {
    for (let j = i + 1; j < len; j++) {
      const curr = Math.abs(j - i) * Math.min(height[j], height[i]);
      if (curr > max) {
        max = curr;
        maxStart = i;
        maxEnd = j;
      }
    }
  }
  但这种方案会超时，当数量为20w左右会超时:57/65 cases passed (N/A)

  优化方法2：
  如果用两个下标，从起终点开始移动，则时间复杂度只有O(n)
  之前写复杂了，其实就比较height[end] 和 height[start]就行
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let max = 0;
  let len = height.length;
  let maxStart;
  let maxEnd;
  let start = 0;
  let end = len - 1;
  function calcMax(s, e) {
    const curr = (e - s) * Math.min(height[s], height[e]);
    return curr;
  }
  while (start < end) {
    const curr = calcMax(start, end);
    if (curr > max) {
      max = curr;
      maxStart = start;
      maxEnd = end;
    }
    if (height[end] > height[start]) {
      start += 1;
    } else {
      end -= 1;
    }
  }

  console.log("max:", maxStart, maxEnd, max);
  return max;
};
// @lc code=end
