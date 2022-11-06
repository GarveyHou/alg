/* 给你一个整数数组 coins ，表示不同面额的硬币；以及一个整数 amount ，表示总金额。
计算并返回可以凑成总金额所需的 最少的硬币个数 。如果没有任何一种硬币组合能组成总金额，返回 -1 。
你可以认为每种硬币的数量是无限的。
 */

/* 可以转动规的，先暴力递归再动规 */
const arr = [1, 2, 5]
const target = 20

var process = function (rest) {
  let res = Number.MAX_SAFE_INTEGER
  let flag = 0
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] <= rest) {
      let base = process(rest - arr[i])
      if (base !== -1) {
        res = Math.min(res, base + 1)
        flag = 1
      }
    }
  }
  if (flag == 0) {
    return -1
  }
  return res
}
function fn2() {
  let dp = new Array(target + 1).fill(-2)
  var process = function (rest) {
    if (dp[rest] !== -2) {
      return dp[rest]
    }
    let res = Number.MAX_SAFE_INTEGER
    let flag = 0
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] <= rest) {
        let base = process(rest - arr[i])
        if (base !== -1) {
          res = Math.min(res, base + 1)
          flag = 1
        }
      }
    }
    if (flag == 0) {
      dp[rest] = -1
      return dp[rest]
    }
    dp[rest] = res
    return dp[rest]
  }
  return process(target)
}

// 动规
function fn3() {
  let dp = new Array(target + 1).fill(-2)
  dp[0] = 0
  for (let i = 1; i <= target; i++) {
    let res = Number.MAX_SAFE_INTEGER
    let flag = 0
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] <= i) {
        if (dp[i - arr[j]] !== -1) {
          res = Math.min(res, dp[i - arr[j]] + 1)
          flag = 1
        }
      }
    }
    if (flag == 0) {
      dp[i] = -1
    } else {
      dp[i] = res
    }
  }
  return dp[target]
}
