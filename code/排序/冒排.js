const arr = [5, 4, 1, 3, 8, 9, 4, 6, 5]
function bubbleSort(arr) {
  var n = arr.length
  for (var i = 0; i < n; i++) {
    for (var j = 0; j < n - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        // 相邻元素两两比较
        var temp = arr[j + 1] // 元素交换
        arr[j + 1] = arr[j]
        arr[j] = temp
      }
    }
  }
  return arr
}
console.log(bubbleSort(arr))
