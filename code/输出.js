var arr = [1, 2, 3, 4, 4]

function fn(a) {

}

for (var i = 1; i <= 5; i++) {
  setTimeout(function timer() {
    console.log(i);
  }, i * 1000);
}
11: 05
侯嘉伟
setTimeout(function timer() {
  console.log(i);
}, i * 1000);

侯嘉伟
for (var i = 1; i <= 5; i++) {
  function fn() {
    setTimeout(function timer() {
      console.log(i);
    }, i * 1000);
  } (i);
}
A_lei
var MAP = {
  onclick: function () {

  },
  curry: function (val) {
    return function (z) {
      return val++ + z
    }
  }
}

var getInfo = function (val) {
  return MAP[val]
}
var fn = getInfo('curry')

var a = fn(100)

console.log(a(200))
console.log(a(300))
console.log(fn(100)(200))
console.log(getInfo('curry')(100)(300))
11: 16
A_lei
字符串长度为N
11: 20
侯嘉伟
var arr = [1, 2, 3, 4, 'a', 'b', 'c']

function fn(a) {
  for (var i = 0; i < arr.length; i++) {
    if (arr.indexOf(arr[i]) !== arr.lastIndexOf(arr[i])) {
      return true;
    }
  }
  return false;
}
console.log(fn(arr));