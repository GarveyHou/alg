const arr = [5, 4, 1, 3, 8, 9, 4, 6, 5]
function insertionSort(arr) {
  let n = arr.length
  let preIndex, cur
  for (let i = 1; i < n; i++) {
    preIndex = i - 1
    cur = arr[i]
    while (preIndex >= 0 && arr[preIndex] > cur) {
      arr[preIndex + 1] = arr[preIndex]
      preIndex--
    }
    arr[preIndex + 1] = cur
  }
  return arr
}
console.log(insertionSort(arr))

function SellSort(arr) {
  var n = arr.length
  for (var gap = Math.floor(n / 2); gap > 0; gap = Math.floor(gap / 2)) {
    // 多个分组交替执行
    for (var i = gap; i < n; i++) {
      var j = i
      var current = arr[i]
      while (j - gap >= 0 && current < arr[j - gap]) {
        arr[j] = arr[j - gap]
        j = j - gap
      }
      arr[j] = current
    }
  }
  return arr
}
console.log(SellSort(arr))
