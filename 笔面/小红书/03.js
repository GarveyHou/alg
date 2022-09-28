const arr = [
  [2, 1, 3],
  [3, 2, 4],
]

class Graph {
  constructor() {
    this.nodes = new Map()
    this.edges = []
  }
}
class Node {
  constructor(value) {
    this.value = value
    this.connectCount = 0
    this.nexts = []
    this.edges = []
  }
}
class Edge {
  constructor(from, to, weight) {
    this.from = from
    this.to = to
    this.weight = weight
  }
}

var graph = new Graph()

for (let i = 0; i < arr.length; i++) {
  let from = arr[i][0]
  let to = arr[i][1]
  let weight = arr[i][2]
  if (!graph.nodes.has(from)) {
    graph.nodes.set(from, new Node(from))
  }
  if (!graph.nodes.has(to)) {
    graph.nodes.set(to, new Node(to))
  }

  let fromNode = graph.nodes.get(from)
  let toNode = graph.nodes.get(to)

  let curEdge = new Edge(fromNode, toNode, weight)
  let curEdge1 = new Edge(toNode, fromNode, weight)
  fromNode.nexts.push(toNode)
  fromNode.connectCount++
  toNode.nexts.push(fromNode)
  toNode.connectCount++
  fromNode.edges.push(curEdge)
  toNode.edges.push(curEdge)
  graph.edges.push(curEdge)
  // graph.edges.push(curEdge1)
}

// console.log(graph)

class Heap {
  constructor() {
    this.arr = []
  }
  push(edge) {
    this.arr.push(edge)
    this.arr.sort((a, b) => {
      return a.weight - b.weight
    })
  }
  shift() {
    let res = this.arr.shift()
    this.arr.sort((a, b) => {
      return a.weight - b.weight
    })
    return res
  }
  isEmpty() {
    return this.arr.length == 0
  }
}
function prim(graph) {
  var heap = new Heap()
  var set = new Set()
  var result = new Set()
  var node = graph.nodes.get(1)
  set.add(node)
  for (var edge of node.edges) {
    heap.push(edge)
  }
  while (!heap.isEmpty()) {
    var edge = heap.shift()
    var toNode = edge.to
    var fromNode = edge.from
    if (!set.has(toNode)) {
      set.add(toNode)
      result.add(edge)
      for (var nextEdge of toNode.edges) {
        heap.push(nextEdge)
      }
    }
    if (!set.has(fromNode)) {
      set.add(fromNode)
      result.add(edge)
      for (var nextEdge of fromNode.edges) {
        heap.push(nextEdge)
      }
    }
  }
  return result
}
let resSet = prim(graph)
let res = 0
for (let item of resSet) {
  res += item.weight
}
console.log(res)
