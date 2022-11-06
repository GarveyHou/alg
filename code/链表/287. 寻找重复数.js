/*给定一个包含 n + 1 个整数的数组 nums ，其数字都在 [1, n] 范围内（包括 1 和 n），可知至少存在一个重复的整数。
假设 nums 只有 一个重复的整数 ，返回 这个重复的数 。
你设计的解决方案必须 不修改 数组 nums 且只用常量级 O(1) 的额外空间。
  */
const nums = [1, 3, 4, 2, 2]

/* 思路，建立链表，每个指向是index->nums[index]的；如样例 0->1;1->3;2->4;3->2;4->2；
那么一定会有环，重复元素，利用求链表的入环节点来求解这个题 */
var findDuplicate = function (nums) {
  // 初始快慢指针，都在0
  let slow = 0,
    fast = 0
  do {
    // 满指针一步
    slow = nums[slow]
    // 快指针两步
    fast = nums[nums[fast]]
  } while (slow !== fast)
  // 快指针回去
  fast = 0
  while (slow !== fast) {
    // 一起走到一块就是入环节点
    fast = nums[fast]
    slow = nums[slow]
  }
  return slow
}
