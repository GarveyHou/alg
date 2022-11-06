const nums = [10, 9, 2, 5, 3, 7, 101, 18]
// 暴力递归
// var lengthOfLIS = function (nums) {
//   const n = nums.length
//   var process = function (i) {
//     if (i == n) {
//       return 0
//     }
//     let res = 0
//     let flag = 0
//     for (let k = i; k < n; k++) {
//       if (i == 0) {
//         flag = 1
//         res = Math.max(res, process(k + 1) + 1)
//       } else if (nums[k] > nums[i - 1]) {
//         flag = 1
//         res = Math.max(res, process(k + 1) + 1)
//       }
//     }
//     if (flag == 0) {
//       return 0
//     }
//     return res
//   }
//   return process(0)
// }

// 傻缓存
// var lengthOfLIS = function (nums) {
//   const n = nums.length
//   const dp = new Array(n + 1).fill(-1)
//   dp[n] = 0
//   var process = function (i) {
//     if (dp[i] !== -1) {
//       return dp[i]
//     }
//     let res = 0
//     let flag = 0
//     for (let k = i; k < n; k++) {
//       if (i == 0) {
//         flag = 1
//         res = Math.max(res, process(k + 1) + 1)
//       } else if (nums[k] > nums[i - 1]) {
//         flag = 1
//         res = Math.max(res, process(k + 1) + 1)
//       }
//     }
//     if (flag == 0) {
//       dp[i] = 0
//       return dp[i]
//     } else {
//       dp[i] = res
//       return dp[i]
//     }
//   }
//   return process(0)
// }

// 动规
var lengthOfLIS = function (nums) {
  const n = nums.length
  const dp = new Array(n + 1).fill(-1)
  dp[n] = 0
  for (let i = n - 1; i >= 0; i--) {
    let res = 0
    let flag = 0
    for (let k = i; k < n; k++) {
      if (i == 0) {
        flag = 1
        res = Math.max(res, dp[k + 1] + 1)
      } else if (nums[k] > nums[i - 1]) {
        flag = 1
        res = Math.max(res, dp[k + 1] + 1)
      }
    }
    if (flag == 0) {
      dp[i] = 0
    } else {
      dp[i] = res
    }
  }
  return dp[0]
}

//   var process = function (i) {
//     if (dp[i] !== -1) {
//       return dp[i]
//     }
//     let res = 0
//     let flag = 0
//     for (let k = i; k < n; k++) {
//       if (i == 0) {
//         flag = 1
//         res = Math.max(res, process(k + 1) + 1)
//       } else if (nums[k] > nums[i - 1]) {
//         flag = 1
//         res = Math.max(res, process(k + 1) + 1)
//       }
//     }
//     if (flag == 0) {
//       dp[i] = 0
//       return dp[i]
//     } else {
//       dp[i] = res
//       return dp[i]
//     }
//   }
//   return process(0)
// }
console.log(lengthOfLIS(nums))
