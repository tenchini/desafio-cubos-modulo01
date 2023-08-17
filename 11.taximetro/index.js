function solucao(min, km) {
  const custoDoisAcima = 50 * 20 + 70 * 10
  const kmAcima = km - 10
  const minAcima = min - 20
  if (min <= 20 && km <= 10) {
    custoDaViagem = 50 * min + 70 * km
  } else if (min > 20 && km > 10) {
    custoDaViagem = custoDoisAcima + kmAcima * 50 + minAcima * 30
  } else if (min <= 20 && km > 10) {
    custoDaViagem = 50 * min + 70 * 10 + kmAcima * 50
  } else if (min >= 20 && km < 10) {
    custoDaViagem = 50 * 20 + 70 * km + minAcima * 30
  }

  console.log(Math.floor(custoDaViagem))
}

function processData(input) {
  const x = input.split(" ")
  const min = parseFloat(x[0], 10)
  const km = parseFloat(x[1], 10)
  solucao(min, km)
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
