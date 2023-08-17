const array = [0, 1, 2, 3, 4]

function solucao(lista) {
    const resultado = lista.reduce((acumulador, atual) => {
        return (acumulador += atual)
    })
    console.log(resultado)
}

solucao(array)

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
