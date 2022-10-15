class Deferred {
  constructor() {
    // this.promise = new Promise((resolve, reject) => {})
    // this.resolve = function () {}
    // this.reject = function () {}
    this.flag = 0
    this.value = ''
    this.error = ''
    this.callback = function (resolve, reject) {
      if (this.flag == 1) {
        resolve(this.value)
      }
      if (this.flag == 2) {
        reject(this.error)
      }
    }
    return new Promise(this.callback)
  }
  promise() {
    return this
  }
  resolve(val) {
    this.flag = 1
    this.value = val
    this.callback()
  }
  reject(err) {
    this.error = err
    this.flag = 2
    this.callback()
  }
}

class f {
  // resolve
  // reject
  constructor() {
    this.promise = new Promise((resolve = this.resolve, reject = this.reject) => {})
  }
}
let ff = new f()
console.log(ff)
ff.resolve()
console.log(ff)

function test() {
  const socket = new WebSocket('serverUrl')
  const defered = new Deferred()
  socket.onopen = () => {
    defered.resolve('success')
  }

  socket.onerror = (error) => {
    defered.reject(error)
  }
  return defered.promise()
}

test().then((status) => {
  console.log(status)
}, console.error)
