function all(fns, limit) {
  const n = fns.length
  let result = []
  let count = 0

  return new Promise((resolve, reject) => {
    class Sce {
      constructor(limit) {
        this.queue = []
        this.limit = limit
        this.count = 0
      }
      addTask(fn) {
        this.queue.push(fn)
      }
      startTask() {
        for (let i = 0; i < this.limit; i++) {
          this.open()
        }
      }
      open() {
        if (this.count == 0 || this.count == this.limit) {
          return
        }
        let fn = this.queue.shift()
        fn().then(
          (res) => {
            this.count--
            addData(index, res)
            this.open()
          },
          (err) => {
            reject(err)
          }
        )
      }
    }
    let bfq = new Sce(limit)
    const addData = function (index, data) {
      count++
      result[index] = data
      if (count == n) {
        resolve(result)
      }
    }
    fns.forEach((fn) => {
      bfq.addTask(fn)
      // fn().then(
      //   (res) => {
      //     addData(index, res)
      //   },
      //   (err) => {
      //     reject(err)
      //   }
      // )
    })
    bfq.startTask()
  })
}
