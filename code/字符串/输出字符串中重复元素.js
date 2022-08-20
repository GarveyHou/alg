const str = 'aabbccdddde'
let temp = []
let arr = str.split('').sort().sort((a, b) => {
  if (a == b && temp.indexOf(a) == -1) {
    temp.push(a)
  }
})
console.log(temp.join(''))