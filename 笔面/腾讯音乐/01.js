// let str = '1001101'
// let zeroCount = 0,
//   oneCount = 0

// let zeroArr = []
// let mark0 = 0
// for (let i = 0; i <= str.length; i++) {
//   if (i == 0) {
//     if (str[i] == '0') {
//       mark0++
//     }
//   } else if (i == str.length - 1 && str[i] == '0') {
//     if (str[i - 1] !== '0') {
//       zeroArr.push(mark0)
//     } else {
//       zeroArr.push(mark0 + 1)
//     }
//   } else {
//     if (str[i] == '0' && str[i - 1] == '0') {
//       mark0++
//     } else if (str[i] == '1' && str[i - 1] == '0') {
//       zeroArr.push(mark0)
//     } else if (str[i] == '0' && str[i - 1] == '1') {
//       mark0 = 1
//     }
//   }
// }

// zeroArr.forEach((item) => {
//   zeroCount += Math.ceil(item / 2)
// })

// console.log(zeroArr)
// console.log(zeroCount)

// let oneArr = []
// let mark1 = 0

// for (let i = 0; i < str.length; i++) {
//   if (i == 0) {
//     if (str[i] == '1') {
//       mark1++
//     }
//   } else if (i == str.length - 1 && str[i] == '1') {
//     if (str[i - 1] !== '1') {
//       oneArr.push(mark1)
//     } else {
//       oneArr.push(mark1 + 1)
//     }
//   } else {
//     if (str[i] == '1' && str[i - 1] == '1') {
//       mark1++
//     } else if (str[i] == '0' && str[i - 1] == '1') {
//       oneArr.push(mark1)
//     } else if (str[i] == '1' && str[i - 1] == '0') {
//       mark1 = 1
//     }
//   }
// }
// oneArr.forEach((item) => {
//   oneCount += Math.ceil(item / 2)
// })

// console.log(oneArr)
// console.log(oneCount)

// console.log(Math.min(oneCount, zeroCount))

const arr = [5, 2, 3, 50, 4]

let fiveCount = [],
  twoCount = []
for (let item of arr) {
  let two = 0,
    five = 0
  while (item % 2 == 0) {
    item /= 2
    two++
  }
  twoCount.push(two)
  while (item % 5 == 0) {
    item /= 5
    five++
  }
  fiveCount.push(five)
}
// console.log(fiveCount, twoCount)
console.log(Math.min(fiveCount, twoCount))
