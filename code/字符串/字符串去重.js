const str = 'aabbccdddd'
let set = new Set()
for (let i of str) {
  set.add(i)
}
for (let i of set.values()) {
  console.log(i);
}