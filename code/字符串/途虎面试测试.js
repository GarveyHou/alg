// async function fn() {
//   try {
//     new Promise((resolve, reject) => {
//       throw new Error('123')
//     })
//   } catch (err) {
//     console.log(err)
//   }
// }

// let p = new Promise((resolve, reject) => {
//   resolve()
// }).then((res) => {
//   throw new Error()
// })
// console.log(p)
// const arr = [5, 4, 3, 2, 1]
// console.log(
//   arr.sort((x, y) => {
//     if (x > y) {
//       return 1
//     } else {
//       return -1
//     }
//   })
// )
// const p = new Promise((res) => res())
// p.then(
//   () => {
//     console.log(1)
//     throw new Error('err')
//   },
//   () => {
//     console.log(2)
//   }
// )
//   .then(
//     () => {
//       console.log(3)
//     },
//     () => {
//       console.log(4)
//     }
//   )
//   .then(
//     () => {
//       console.log(5)
//     },
//     () => {
//       console.log(6)
//     }
//   )

async function fn() {
  await new Promise((resolve, reject) => resolve())
  console.log(123)
  await new Promise((resolve, reject) => resolve())
}
fn()
console.log(456)
