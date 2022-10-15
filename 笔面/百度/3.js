let n = 6

let flag = 0
let str = ''
let i
let sum = 0
let count
while (flag == 0) {
  n = n - sum
  i = 1
  sum = 0
  count = 0
  if (flag == 0) {
    while (sum <= n && sum + i <= n) {
      sum += i
      count++
      if (sum == n) {
        flag = 1
        console.log(str + 'r'.repeat(count))
      }
      i++
    }
  }
  str = str + 'r'.repeat(count)
  if (flag == 0) {
    n = n - sum
    i = 1
    sum = 0
    count = 0
    while (sum <= n && sum + i <= n) {
      sum += i
      count++
      if (sum == n) {
        flag = 1
        console.log(str + 'e'.repeat(count))
      }
      i++
    }
  }
  str = str + 'e'.repeat(count)
  if (flag == 0) {
    n = n - sum
    i = 1
    sum = 0
    count = 0
    while (sum <= n && sum + i <= n) {
      sum += i
      count++
      if (sum == n) {
        flag = 1
        console.log(str + 'd'.repeat(count))
      }
      i++
    }
  }
  str = str + 'd'.repeat(count)
}
// while (sum < n && sum + i <= n) {
//   sum += i
//   count++
//   if (sum == n) {
//     flag = 1
//     console.log('r'.repeat(count))
//   }
//   i++
// }
// let str = 'r'.repeat(count)
// if (flag == 0) {
//   n = n - sum
//   i = 1
//   sum = 0
//   count = 0
//   while (sum < n && sum + i <= n) {
//     sum += i
//     count++
//     if (sum == n) {
//       flag = 1
//       console.log(str + 'e'.repeat(count))
//     }
//     i++
//   }
// }
// str = str + 'e'.repeat(count)
// if (flag == 0) {
//   n = n - sum
//   i = 1
//   sum = 0
//   count = 0
//   while (sum < n && sum + i <= n) {
//     sum += i
//     count++
//     if (sum == n) {
//       flag = 1
//       console.log(str + 'd'.repeat(count))
//     }
//     i++
//   }
// }
// str = str + 'e'.repeat(count)

// n = n - sum
// i = 1
// sum = 0
// count = 0
// while (sum < n && sum + i <= n) {
//   sum += i
//   count++
//   if (sum == n) {
//     console.log(str + 'e'.repeat(count))
//   }
//   i++
// }
// str += 'e'.repeat(count)
// n = n - sum
// i = 1
// sum = 0
// count = 0
// while (sum < n && sum + i <= n) {
//   sum += i
//   count++
//   if (sum == n) {
//     console.log(str + 'd'.repeat(count))
//   }
//   i++
// }

// console.log(n - sum)
// function getCount(s) {
//   let n = s.length
//   let res = 0
//   for (let i = 0; i < 2 * n - 1; i++) {
//     let left = Math.floor(i / 2),
//       right = left + (i % 2)
//     while (left >= 0 && right < n && s[left] == s[right]) {
//       res++
//       left--
//       right++
//     }
//   }
//   return res
// }
