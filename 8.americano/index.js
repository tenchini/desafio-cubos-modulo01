function solucao(numeros) {
  const resultado = numeros.reduce(
    (acumulador, valorAtual) => acumulador + valorAtual,
    0
  )
  const posicaoGoleiro = resultado % numeros.length
  console.log(posicaoGoleiro === 0 ? numeros.length : posicaoGoleiro)
}

function processData(input) {
  const strings = input.split(" ")
  const numeros = []
  for (let i = 0; i < strings.length; i++) {
    numeros.push(parseInt(strings[i], 10))
  }
  solucao(numeros)
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
