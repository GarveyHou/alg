// let A = [
//   [0, 1, 5, 65535, 65535, 65535, 65535, 65535, 65535],
//   [1, 0, 3, 7, 5, 65535, 65535, 65535, 65535],
//   [5, 3, 0, 65535, 1, 7, 65535, 65535, 65535],
//   [65535, 7, 65535, 0, 2, 65535, 3, 65535, 65535],
//   [65535, 5, 1, 2, 0, 3, 6, 9, 65535],
//   [65535, 65535, 7, 65535, 3, 0, 65535, 5, 65535],
//   [65535, 65535, 65535, 3, 6, 65535, 0, 2, 7],
//   [65535, 65535, 65535, 65535, 9, 5, 2, 0, 4],
//   [65535, 65535, 65535, 65535, 65535, 65535, 7, 4, 0],
// ]
let A = [
  [0, 6, 13],
  [10, 0, 4],
  [5, 65535, 0],
]
let n = 3
let path = []
for (let i = 0; i < n; i++) {
  path[i] = []
  for (let j = 0; j < n; j++) {
    path[i][j] = -1
  }
}
console.log(path)

function Floyd() {
  for (let k = 0; k < n; k++) {
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        if (A[i][j] > A[i][k] + A[k][j]) {
          A[i][j] = A[i][k] + A[k][j]
          path[i][j] = k
        }
      }
    }
  }
}
Floyd()
console.log(path)
console.log(A)

function findpath(start, end) {
  if (A[start][end] < 65535 && path[start][end] == -1) {
    console.log(end)
  } else {
    let mid = path[start][end]
    findpath(start, mid)
    findpath(mid, end)
  }
}
function main(start, end) {
  // console.printf('%d点到%d点的最短路径为:%d', start, end, start)
  console.log(start)
  findpath(start, end)
}
main(1, 0)
