const t = 2,
  arr = [1, 2, 1, 2]

console.log(fn(arr, t))
function fn(arr, t) {
  const map = new Map()
  arr.sort((x, y) => {
    return x - y
  })
  const a = []
  for (let i = 0; i < arr.length; i++) {
    if (!map.has(arr[i])) {
      map.set(arr[i], 1)
    } else {
      map.set(arr[i], map.get(arr[i]) + 1)
    }
  }
  for (let entry of map.entries()) {
    a.push(entry)
  }
  console.log(a)
  for (let i = 0; i < a.length; i++) {
    for (let j = i; j < a.length; j++) {
      let sum = 0
      for (let k = i; k <= j; k++) {
        sum += a[k][1]
      }
      if (sum == t) {
        return a[i][0] + ' ' + a[j][0]
      }
    }
  }
  return -1
}
