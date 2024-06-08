// 44.	Suma de números: Pide al usuario que ingrese números enteros positivos uno por uno y utiliza un bucle while para calcular la suma de estos números.
// //  El ciclo debe terminar cuando el usuario ingrese un número negativo.

const readline = require('readline')


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

let suma = 0

function solicitarNumero() {
  rl.question('Ingresa un número entero positivo (o un número negativo para terminar): ', (entrada) => {
    const numero = parseInt(entrada)

    if (isNaN(numero)) {
      console.log('Por favor, ingresa un número válido.')
      solicitarNumero()
    } else if (numero < 0) {
      console.log(`La suma total de los números ingresados es: ${suma}`)
      rl.close()
    } else {
      suma += numero
      solicitarNumero()
    }
  })
}


solicitarNumero()
