// 15.	Tabla de multiplicar: Pide al usuario un número y muestra su tabla de multiplicar del 1 al 10.
const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

rl.question('Ingrese un número: ', (numero) => {
  numero = parseInt(numero)
  console.log('Tabla de multiplicar del ' + numero + ':')
  for (let i = 1; i <= 10; i++) {
    console.log(numero + ' x ' + i + ' = ' + (numero * i))
  }
  rl.close()
})
