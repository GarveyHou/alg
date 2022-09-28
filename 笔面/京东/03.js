const n = 5,
  k = 3
// const arr = [1, 2, 3, 4, 5]
const arr = [2, 2, 2, 2, 2]
// console.log(arr)
function getjicha(a) {
  for (let i = 0; i < k; i++) {
    if (a.indexOf(i) == -1) {
      return 0
    }
  }
  let res = 0
  let data = new Array(k).fill('').map((d) => new Array())
  // console.log(data)
  for (let i = 0; i < a.length; i++) {
    let num = a[i]
    data[num].push(arr[i])
  }
  // console.log(data)

  data.forEach((item) => {
    let nummax = Math.max(...item)
    let nummin = Math.min(...item)
    res += nummax - nummin
  })
  return res
}

// console.log(getjicha([0, 1, 2, 1, 2]))
let max = 0
let dir = new Array(k).fill(0)
dir = dir.map((item, index) => {
  return index
})
// console.log(dir)
function process(i, curRes) {
  if (i == n) {
    // console.log(curRes)
    max = Math.max(max, getjicha(curRes))
    return
  }
  for (let j = 0; j < k; j++) {
    let curarr = [...curRes, j]
    process(i + 1, curarr)
  }
}
process(0, [])
console.log(max)
