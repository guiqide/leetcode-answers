/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * 解题思路：模拟加法过程，从低位到高位逐位相加，考虑进位
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let needAdd = false;
  const head = new ListNode(0);
  tail = head;
  while (l1 || l2) {
    const n1 = l1 ? l1.val : 0;
    const n2 = l2 ? l2.val : 0;
    let currSum = n1 + n2;
    currSum += needAdd && 1;
    needAdd = currSum >= 10 && true;
    const node = new ListNode(currSum % 10);
    tail.next = node;
    l1 = l1 ? l1.next : null;
    l2 = l2 ? l2.next : null;
    tail = tail.next;
  }
  if (needAdd) {
    const node = new ListNode(1);
    tail.next = node;
  }

  return head.next ? head.next : head;
};
// @lc code=end
