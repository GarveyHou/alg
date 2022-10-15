const n = 4,
  arr = ['Baidu', 'baidu', 'Baidu', 'bbdu']
let str = 'Baidu'
for (let i = 0; i < n; i++) {
  if (arr[i].length !== 5) {
    console.log('No')
  } else {
    const map = new Map()
    for (let char of arr[i]) {
      if (!map.has(char)) {
        map.set(char, 1)
      } else {
        map.set(char, map.get(char) + 1)
      }
    }
    let flag = 'Yes'
    for (let c of str) {
      if (map.get(c) !== 1) {
        flag = 'No'
        break
      }
    }
    console.log(flag)
  }
}
