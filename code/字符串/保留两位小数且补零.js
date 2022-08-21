const a = 1.4564524545

// 第一种
// const b = a.toFixed(2)
// console.log(b);

// // 第二种
// console.log(Math.round(a));

// // 第三种

// const num = a.toString().match(/^\d+(\.\d{0,2})$/)
// console.log(num);

// 第四种

function fn (num) {
  const num1 = parseFloat(num)
  const num2 = Math.round(num1 * 100) / 100

  let str = num2.toString()
  let index = str.indexOf('.')
  if (index < 0) {
    str += '.00'
  } else if (index == str.length - 2) {
    str += '0'
  }
  console.log(str)
}

fn(a)

let str2 = 'adada'
str2 += ''
console.log(str2)
