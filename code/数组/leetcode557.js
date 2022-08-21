export default (s) => {
  var strArr = s.split(' ')
  var arr = []
  for (var i in strArr) {
    // console.log(strArr[i])
    var stack = []
    var strz = strArr[i]
    var strf = ''
    for (var j of strz) {
      stack.push(j)
    }
    while (stack.length !== 0) {
      strf += stack.pop()
    }
    arr.push(strf)
  }
  return arr.join(' ')
}