/* tree = [
  { name: 'A' },
  {
    name: 'B',
    children: [{ name: 'A' }, { name: 'AA', children: [{ name: 'AAA' }] }],
  },
  { name: 'C' },
]

[
  // 1.假设我输入的str为A, 则过滤后返回的结果为
  ({ name: 'A' }, { name: 'B', children: [{ name: 'A' }] })
]

[
  //2.假设我输入的str为AA,则过滤后返回的结果为
  {
    name: 'B',
    children: [{ name: 'AA', children: [{ name: 'AAA' }] }],
  }
][
  //3.假设我输入的str为B,则过滤后返回的结果为
  {
    name: 'B',
    children: [{ name: 'A' }, { name: 'AA', children: [{ name: 'AAA' }] }],
  }
]
 */

const s1 = '2022-01-10'
const s2 = '2022-01-15'
const arr1 = s1.split('-')
// console.log(arr1)
const arr2 = s2.split('-')
const date1 = new Date(arr1[0], arr1[1] - 1, arr1[2])
const date2 = new Date(arr2[0], arr2[1] - 1, arr2[2])

const t1 = date1.getTime()
const t2 = date2.getTime()

for (let k = t1; k <= t2; k++) {
  console.log(format(new Date(k)))
  k += 24 * 60 * 60 * 1000
}

function format(date) {
  let arr = date.toLocaleDateString().split('/')
  // console.log(arr)
  let month = arr[1] < 10 ? '0' + arr[1] : arr[1]
  let day = arr[2] < 10 ? '0' + arr[2] : arr[2]
  return arr[0] + '-' + month + '-' + day
}
// console.log(date1.toLocaleDateString())
// console.log(date.toLocaleDateString())
// console.log(date.toLocaleTimeString())
// console.log(date.toLocaleDayString())
// console.log(date.toLocaleSecondsString())

// console.log(parseInt('10', 10))
