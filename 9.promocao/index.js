function solucao(precos) {
  const precosOrdenados = [...precos].sort((a, b) => a - b)
  if (precosOrdenados.length < 3) {
    console.log(precosOrdenados.reduce((acc, valorAtual) => acc + valorAtual))
  } else {
    const desconto = precosOrdenados[0] / 2
    const numFormatado = precosOrdenados
      .slice(1)
      .reduce((acc, valorAtual) => acc + valorAtual)
    const valorFinal = numFormatado + (precosOrdenados[0] - desconto)
    console.log(valorFinal)
  }
}

function processData(input) {
  const lista = input.split(" ")
  lista.forEach((x, i, a) => (a[i] = parseInt(x, 10)))
  solucao(lista)
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
