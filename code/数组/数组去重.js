const arr = [1, 2, 3, 4, 5, 6, 3, 4, 5, 6]

function fn(arr) {
  let set = new Set()
  let temp = []
  arr.forEach((item) => {
    set.add(item)
  })
  console.log(set.values());

  for (let i of set.values()) {
    temp.push(i)
  }

  // set.values().forEach(item => {
  //   temp.push(item)
  // })
  return temp

}

console.log(fn(arr));