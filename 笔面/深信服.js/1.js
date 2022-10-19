// ***编程-输入日期字符串数组
var input = ['2021-1-1', '2022-1-1', '2021-8-2', '2021-5-18', '2021-1-1', '2021-1-30', '2021-10-30']
const map = new Map()
const output = {}
for (let i = 0; i < input.length; i++) {
  let arr = input[i].split('-')
  let str = arr[0] + '-' + arr[1]
  if (!map.has(str)) {
    map.set(str, [input[i]])
  } else {
    map.set(str, [...map.get(str), input[i]])
  }
}
for (let entry of map.entries()) {
  output[entry[0]] = [...new Set(entry[1])]
}
console.log(output)

// 输出年月相同的对象数组，需要去重，如下格式：
// output = {
//  '2021-1': ['2021-1-1','2021-1-30'],
//  '2022-1': ['2022-1-1'],
//  '2021-8': ['2021-8-2'],
//  '2021-5': ['2021-5-18'],
//  '2021-10': ['2021-10-30'],
//}
