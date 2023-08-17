function processData(input) {
  if (input === input.toUpperCase()) {
    console.log(input.toLowerCase())
  } else if (
    input ===
    input.charAt(0).toLowerCase() + input.slice(1).toUpperCase()
  ) {
    console.log(
      `${input.charAt(0).toUpperCase()}${input.slice(1).toLowerCase()}`
    )
  } else {
    console.log(input)
  }
}

process.stdin.resume()
process.stdin.setEncoding("ascii")
_input = ""
process.stdin.on("data", function (input) {
  _input += input
})

process.stdin.on("end", function () {
  processData(_input)
})
