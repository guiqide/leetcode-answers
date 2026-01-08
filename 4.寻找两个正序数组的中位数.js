/*
 * @lc app=leetcode.cn id=4 lang=javascript
 *
 * [4] 寻找两个正序数组的中位数
 */

// @lc code=start

function mergeArray(nums1, nums2) {
  let index1 = (index2 = 0);
  const nums = [];
  debugger;
  while (index1 < nums1.length || index2 < nums2.length) {
    const num1 = nums1[index1] === undefined ? Infinity : nums1[index1];
    const num2 = nums2[index2] === undefined ? Infinity : nums2[index2];
    if (num1 < num2) {
      nums.push(nums1[index1]);
      index1++;
    } else {
      nums.push(nums2[index2]);
      index2++;
    }
  }
  return nums;
}

/**
 * 没用分支、或者二分查找，用了一个生成新的数组，并直接计算下表的方法
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  const nums = mergeArray(nums1, nums2);
  const middle =
    nums.length % 2 === 0
      ? (nums[nums.length / 2 - 1] + nums[nums.length / 2]) / 2
      : nums[Math.floor(nums.length / 2)];
  return middle;
};
// @lc code=end
