// 37.	Tabla de multiplicar: Utiliza un bucle for para imprimir la tabla de multiplicar de un número ingresado por el usuario del 1 al 12

const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

rl.question('Ingresa un número para ver su tabla de multiplicar del 1 al 12: ', (numero) => {
 
  if (isNaN(numero)) {
    console.log('Por favor, ingresa un número válido.')
    rl.close()
    return
  }

  
  numero = parseInt(numero)

  
  console.log(`Tabla de multiplicar del ${numero}:`)
  for (let i = 1; i <= 12; i++) {
    console.log(`${numero} x ${i} = ${numero * i}`)
  }

  rl.close()
})
