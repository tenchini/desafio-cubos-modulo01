function processData(input) {
  const [senhaCorreta, senhaDigitada] = input.split("\n")
  let senhaDigitadaIndex = 0

  for (const letra of senhaCorreta) {
    senhaDigitadaIndex = senhaDigitada.indexOf(letra, senhaDigitadaIndex)
    if (senhaDigitadaIndex === -1) {
      console.log("NAO")
      return
    }
    senhaDigitadaIndex++
  }

  console.log("SIM")
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
