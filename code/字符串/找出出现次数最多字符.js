const str = 'aabbccdddd'


let temp = {}
let char, count = 0
for (let i of str) {
  temp[i] ? temp[i] += 1 : temp[i] = 1
}
console.log(temp);
for (let i in temp) {
  if (temp[i] > count) {
    char = i
    count = temp[i]
  }
}

console.log(char, count);