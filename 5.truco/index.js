function solucao(carta) {
    const lista = ["Q", "J", "K", "A", "2", "3"]
    const indexDaCarta = lista.indexOf(carta)
    const indexProximaCarta = (indexDaCarta + 1) % lista.length
    console.log(lista[indexProximaCarta])
}

solucao("Q")

function processData(input) {
    solucao(input)
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
