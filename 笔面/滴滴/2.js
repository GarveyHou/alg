// const arr = [1, 3, 1, 5, 3, 1]
// const k = 3

// let max = 0
// arr.sort()
// // console.log(arr[-1])
// let index = 0
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] !== arr[i - 1]) {
//     let right = i + k
//     let count = 0
//     for (let j = i; j < arr.length; j++) {
//       if (arr[j] <= right) {
//         count++
//       } else {
//         break
//       }
//     }
//     max = Math.max(max, count)
//   }
// }
// console.log(max)

const n = 3,
  x = 5,
  y = 6,
  u = 3,
  v = 5
const arr1 = [4, 1, 3],
  arr2 = [3, 4, 2]
let need1, need2
let sum1 = arr1.reduce((pre, cur) => pre + cur, 0),
  sum2 = arr2.reduce((pre, cur) => pre + cur, 0)

need1 = Math.ceil(sum1 / x)
need2 = Math.ceil(sum2 / y)
console.log(need1, need2)

if (u * 2 < v) {
  console.log((need1 + need2) * u)
} else {
  if ((need1 % 2 == 0 && need2 % 2 == 0) || (need1 % 2 !== 0 && need2 % 2 !== 0)) {
    console.log(((need1 + need2) / 2) * v)
  } else {
    console.log(((need1 + need2 - 1) / 2) * v + u)
  }
}

function shopping() {
  const x = 5
  const y = 6
  const u = 3
  const v = 5
  const a = [4, 1, 3]
  const b = [3, 4, 2]
  const aCost = Math.ceil(a.reduce((a, b) => a + b) / x)
  const bCost = Math.ceil(b.reduce((a, b) => a + b) / y)
  const min = Math.min(aCost, bCost)
  const diff = Math.abs(aCost - bCost)
  console.log(Math.floor(diff / 2) * v + (diff % 2) * u + min * v)
}

shopping()
