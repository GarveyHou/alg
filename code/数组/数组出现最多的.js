const arr = [1, 1, 1, 2, 2, 33, 33, 33, 33, 5, 8, 6, 41, 3]


function fn(arr) {
  let maxValue, maxCount = 0
  let temp = {}
  arr.forEach(element => {
    temp[element] ? temp[element] += 1 : temp[element] = 1

  });
  for (let key in temp) {
    if (temp[key] > maxCount) {
      maxCount = temp[key]
      maxValue = key
    }
  }
  console.log(maxValue, maxCount)
}

fn(arr)