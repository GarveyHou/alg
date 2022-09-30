const s1 = 'ab',
  s2 = 'eidboaoo'
// const s1 = 'adc'
// const s2 = 'dcda'
// const s1 = 'hello'
// const s2 = 'ooolleoooleh'
// const s1 = 'trinitrophenylmethylnitramine'
// const s2 = 'dinitrophenylhydrazinetrinitrophenylmethylnitramine'
// console.log(s1.length, s2.length)
function main() {
  let need = {}
  let win = {}
  let n = s2.length
  for (let c of s1) {
    if (need[c]) {
      need[c]++
    } else {
      need[c] = 1
    }
  }
  console.log(need)
  let i = 0,
    j = 0
  let valid = 0
  while (j < n) {
    if (need[s2[j]]) {
      if (win[s2[j]]) {
        win[s2[j]]++
      } else {
        win[s2[j]] = 1
      }
      if (need[s2[j]] == win[s2[j]]) {
        valid++
      }
    }
    console.log(j, win, valid)

    if (j - i + 1 == s1.length) {
      console.log(j, i)
      // console.log(valid)
      if (valid == Object.keys(need).length) {
        return true
      }
      if (need[s2[i]]) {
        if (win[s2[i]] == need[s2[i]]) valid--
        if (win[s2[i]] == 1) {
          delete win[s2[i]]
        } else {
          win[s2[i]]--
        }
      }
      i++
    }
    j++
  }
  return false
}
console.log(main())
