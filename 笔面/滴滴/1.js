const obj = { a: 1, b: { c: { e: { f: 3 } }, d: 2 } }

function process(obj) {
  for (let k in obj) {
    if (obj.hasOwnProperty(k)) {
      if (typeof obj[k] !== 'object') {
        console.log(k + ':' + obj[k])
      } else {
        process(obj[k])
      }
    }
  }
}
process(obj)
