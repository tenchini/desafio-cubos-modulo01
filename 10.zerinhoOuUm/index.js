function solucao(jogadores) {
  const contaZero = jogadores.reduce(
    (acc, jogador) => acc + (jogador.jogada === 0 ? 1 : 0),
    0
  )
  const contaUm = jogadores.reduce(
    (acc, jogador) => acc + (jogador.jogada === 1 ? 1 : 0),
    0
  )

  if (contaZero === 1) {
    const jogadorSorteado = jogadores.find((jogador) => jogador.jogada === 0)
    console.log(jogadorSorteado.nome)
  } else if (contaUm === 1) {
    const jogadorSorteado = jogadores.find((jogador) => jogador.jogada === 1)
    console.log(jogadorSorteado.nome)
  } else {
    console.log("NINGUEM")
  }
}

function processData(input) {
  solucao(JSON.parse(input))
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
