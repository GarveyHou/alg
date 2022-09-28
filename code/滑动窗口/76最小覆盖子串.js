// var s = "ADOBECODEBANC",
//   t = "ABC"
// var minWindow = function (s, t) {
//   var min = Number.MAX_SAFE_INTEGER
//   var minIndex = 0
//   var arr1 = s.split('')
//   var arr2 = t.split('')
//   const win = []
//   for (let i = 0; i < arr1.length; i++) {
//     win.push(arr1[i])
//     if (isContain(win, arr2)) {
//       while (isAlsoContain(win, arr2)) {
//         win.shift()
//       }
//       if (win.length < min) {
//         min = win.length
//         minIndex = i - min + 1
//       }
//       win.shift()
//     }
//     // console.log(win)
//   }
//   return s.substring(minIndex, minIndex + min)
//   // return [min, minIndex]

// };

// console.log(minWindow(s, t))
// function isContain(arr1, arr2) {
//   for (let i = 0; i < arr2.length; i++) {
//     if (arr1.indexOf(arr2[i]) == -1) {
//       return false
//     }
//   }
//   return true
// }
// function isAlsoContain(arr1, arr2) {
//   const arr = arr1.slice(1)
//   return isContain(arr, arr2)
// }
// const s = 'ADOBECODEBANC',
//   t = 'ABC'
const s = 'AA',
  t = 'AA'

if (t.length > s.length) {
  return ''
}
const need = new Map()
const have = new Map()

for (let i = 0; i < t.length; i++) {
  if (!need.has(t[i])) {
    need.set(t[i], 1)
  } else {
    need.set(t[i], need.get(t[i]) + 1)
  }
}
console.log(need)

const n = s.length
let i = 0,
  j = 0
let min = Number.MAX_SAFE_INTEGER
let res = 0
let flag = true
while (j < n) {
  if (!have.has(s[j])) {
    have.set(s[j], 1)
  } else {
    have.set(s[j], have.get(s[j]) + 1)
  }
  // console.log(have)
  if (isEnough(need, have)) {
    console.log('---')
    // console.log(j)
    console.log(have)
    console.log('---')
    console.log('---')
    while (isEnough(need, have)) {
      have.get(s[i]) == 1 ? have.delete(s[i]) : have.set(s[i], have.get(s[i]) - 1)
      // console.log(have)
      i++
    }
    // console.log('---')
    // console.log(i)
    // console.log('---')
    // console.log(j)
    if (j - i + 2 < min) {
      console.log(i)
      console.log(j)
      flag = false
      res = i - 1
      min = j - i + 2
    }
  }
  j++
}
console.log(res, min)
if (!flag) {
  return s.substring(res, res + min)
} else {
  return ''
}

function isEnough(map1, map2) {
  for (let entry of map1.entries()) {
    if (!map2.has(entry[0]) || map2.get(entry[0]) < entry[1]) {
      return false
    }
  }
  return true
}
