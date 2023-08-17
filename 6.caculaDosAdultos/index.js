function solucao(idades) {
    const resultado = idades.filter((idade) => idade >= 18)
    const menorIdade = resultado.sort((a, b) => a - b)
    menorIdade[0] >= 18
        ? console.log(resultado[0])
        : console.log("CRESCA E APARECA")
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
