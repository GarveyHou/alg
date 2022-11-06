const arr = [0, 0, 1, 0, 3, 12]
/* 给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。

请注意 ，必须在不复制数组的情况下原地对数组进行操作。 */

/* 思路：其实就是冒泡排序的感觉；
i表示当前判断的位置，index表示当前有个index点，后面全是0 */
var moveZeroes = function (nums) {
  function swap(i, j) {
    let temp = nums[i]
    nums[i] = nums[j]
    nums[j] = temp
  }
  let n = nums.length
  let i = 0
  // index==n-1说明后面没有0
  let index = n - 1
  while (i < index) {
    // 如果是0的话，就一直冒，冒到index的位置，然后index--；而且i不可以++，因为有可能把后面的一个i缓过来还是0那么就会错过这个0；不是0的话就可以i++
    if (nums[i] == 0) {
      for (let j = i; j < index; j++) {
        swap(j, j + 1)
      }
      index--
    } else {
      i++
    }
  }
  return nums
}
