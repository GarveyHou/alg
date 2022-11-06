const s = 'my name is bob'

console.log(
  s.replace(/(^|\s)(\w)/g, function (c) {
    return c.toUpperCase()
  })
)


