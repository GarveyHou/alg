let n = 9
let m = 2
let arr = [1, 9, 2, 8, 3, 7, 4, 6, 5]
let choose = [3, 7]

let min = []
let max = []
for (let i = 0; i < m; i++) {
  let num = choose[i]
  for (let j = 0; j < arr.length; j++) {
    if (arr[j] < num) {
      min.push(arr[j])
    } else if (arr[j] > num) {
      max.push(arr[j])
    }
  }
  arr = [...min, num, ...max]
  min = []
  max = []
}
console.log(arr)
