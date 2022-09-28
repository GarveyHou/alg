// const n = 5
// const arr = [
//   ['yesyes', 'yes'],
//   ['yyyeeesss', 'yes'],
//   ['yeyeyeseses', 'yes'],
//   ['sey', 'yes'],
//   ['yssssssseyyyy', 'yes'],
// ]
// // for(let i=0;i<n;i++){
// //   let data1 = read_line()
// //   let data2 = read_line()
// //   arr.push([data1,data2])
// // }
// // console.log(arr)

// for (let i = 0; i < n; i++) {
//   let str1 = arr[i][0].split('')
//   let str2 = arr[i][1].split('')
//   const curIndexs = []
//   for (let j = 0; j < str2.length; j++) {
//     const indexs = []
//     let idx = str1.indexOf(str2[j])
//     while (idx !== -1) {
//       indexs.push(idx)
//       idx = str1.indexOf(str2[j], idx + 1)
//     }
//     curIndexs.push(indexs)
//   }

//   for (var k = 1; k < curIndexs.length; k++) {
//     let flag = 0
//     let preMin = Math.min(...curIndexs[k - 1])
//     for (let p = 0; p < curIndexs[k].length; p++) {
//       if (curIndexs[k][p] > preMin) {
//         flag = 1
//         break
//       }
//     }
//     if (!flag) {
//       break
//     }
//   }
//   if (k == curIndexs.length) {
//     console.log('yes')
//   } else {
//     console.log('no')
//   }
//   // console.log(curIndexs)
// }

// let str1 = arr[0][0].split('')
// let str2 = arr[0][1].split('')
// console.log(str1, str2)
// const indexs = []
// let idx = str1.indexOf(str2[0])
// while (idx !== -1) {
//   indexs.push(idx)
//   idx = str1.indexOf(str2[0], idx + 1)
// }
// console.log(indexs)
