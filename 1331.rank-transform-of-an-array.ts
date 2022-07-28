/*
 * @lc app=leetcode id=1331 lang=typescript
 *
 * [1331] Rank Transform of an Array
 *
 * https://leetcode.com/problems/rank-transform-of-an-array/description/
 *
 * algorithms
 * Easy (58.70%)
 * Likes:    1045
 * Dislikes: 60
 * Total Accepted:    65.6K
 * Total Submissions: 111.7K
 * Testcase Example:  '[40,10,20,30]'
 *
 * Given an array of integers arr, replace each element with its rank.
 * 
 * The rank represents how large the element is. The rank has the following
 * rules:
 * 
 * 
 * Rank is an integer starting from 1.
 * The larger the element, the larger the rank. If two elements are equal,
 * their rank must be the same.
 * Rank should be as small as possible.
 * 
 * 
 * 
 * Example 1:
 * 
 * 
 * Input: arr = [40,10,20,30]
 * Output: [4,1,2,3]
 * Explanation: 40 is the largest element. 10 is the smallest. 20 is the second
 * smallest. 30 is the third smallest.
 * 
 * Example 2:
 * 
 * 
 * Input: arr = [100,100,100]
 * Output: [1,1,1]
 * Explanation: Same elements share the same rank.
 * 
 * 
 * Example 3:
 * 
 * 
 * Input: arr = [37,12,28,9,100,56,80,5,12]
 * Output: [5,3,4,2,8,6,7,1,3]
 * 
 * 
 * 
 * Constraints:
 * 
 * 
 * 0 <= arr.length <= 10^5
 * -10^9 <= arr[i] <= 10^9
 * 
 * 
 */

// @lc code=start
interface IRank {
  value: number;
  index: number;
  rank: number;
}
function arrayRankTransform(arr: number[]): number[] {
  const indexArr: IRank[] = []
  const arrMap = arr.map((item, i) => {
    const obj = {
      value: item,
      index: i,
      rank: 1
    }
    indexArr.push(obj)
    return obj
  })
  const orderedArr = arrMap.sort((a, b) => a.value - b.value);
  for (let index = 0; index < orderedArr.length; index++) {
    const element = orderedArr[index];
    let rank = index + 1
    if (index > 0) {
      const preElement = orderedArr[index - 1];
      if (element.value === preElement.value) {
        rank = preElement.rank
      } else {
        rank = preElement.rank + 1
      }
    }

    element.rank = rank
  }
  // console.log(orderedArr, indexArr);
  
  return indexArr.map(item => item?.rank);
};
// @lc code=end

