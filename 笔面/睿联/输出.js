async function fn() {
  try {
    await new Promise((a, b) => {
      a(1)
    })
      .then((res) => {
        console.log(res)
        throw new Error(12)
      })
      .finally(() => {
        console.log(456)
      })
  } catch (e) {
    console.log(e.message)
  }
}
fn()
