const arr = [5, 1, 2, 3, 4]
let n = arr.length
let res = 0
let count = 0

for (let i = 0; i < n; i++) {
  if (i == 0) {
    count++
  } else {
    if (arr[i] > arr[i - 1]) {
      count++
    } else {
      res = Math.max(res, count)
      count = 1
    }
  }
}
res = Math.max(res, count)
console.log(res)
