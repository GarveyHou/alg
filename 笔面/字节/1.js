// const line = readline()
//   .split(' ')
//   .map((d) => Number(d))
// // console.log(line)
// let n = line[0]
// let arr = line.slice(1)
// // console.log(n)
// // console.log(arr)
// console.log(fn())
// function fn() {
//   let res = 0
//   let cur = 0
//   for (let i = 0; i < n; i++) {
//     if (arr[i] >= -10 && arr[i] <= 30) {
//       if (cur == 0) {
//         cur = 1
//       } else {
//         cur *= 2
//         res++
//       }
//       //       console.log(cur,res)
//     } else if (arr[i] < -10 || arr[i] > 30) {
//       if (cur <= 4) {
//         return ++res
//       } else {
//         cur /= 2
//         cur /= 2
//         res++
//       }
//     }
//   }
//   return n - 1
// }

const line1 = readline()
  .split(' ')
  .map((d) => Number(d))
const arr = readline()
  .split(' ')
  .map((d) => Number(d))
const n = line1[0],
  k = line1[1]
// console.log(n,k)
// console.log(arr)

const overtwo = [],
  overthree = []
const map = new Map()
for (let i = 0; i < n; i++) {
  if (map.has(arr[i])) {
    map.set(arr[i], map.get(arr[i]) + 1)
  } else {
    map.set(arr[i], 1)
  }
}

for (let entry of map.entries()) {
  if (entry[1] >= 3) {
    overtwo.push(entry[0])
    overthree.push(entry[0])
  } else if (entry[1] == 2) {
    overtwo.push(entry[0])
  }
}
let res1 = 0,
  res2 = 0
for (let i = 0; i < overthree.length; i++) {
  for (let j = 0; j < overtwo.length; j++) {
    if (overthree[i] == overtwo[j]) {
      continue
    }
    if (overthree[i] * 3 + overtwo[j] * 2 > k) {
      continue
    }
    if (compare(res1, res2, overthree[i], overtwo[j])) {
      res1 = overthree[i]
      res2 = overtwo[j]
    }
  }
}
console.log(res1 + ' ' + res2)
function compare(a1, a2, i, j) {
  if (a1 == 1) {
    a1 = 14
  }
  if ((a2 = 1)) {
    a2 = 14
  }
  if (i == 1) {
    i = 14
  }
  if (j == 1) {
    j = 14
  }
  if (a1 < i) {
    return true
  } else if (a1 == i) {
    if (a2 < j) {
      return true
    } else {
      return false
    }
  } else {
    return false
  }
}
