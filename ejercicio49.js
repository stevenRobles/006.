// 49.	Buscar un elemento: Pide al usuario que ingrese un número y verifica si ese  número está presente en un arreglo dado.

const readline = require('readline')


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})


const arreglo = [10, 20, 30, 40, 50]


rl.question('Ingresa un número para verificar si está presente en el arreglo: ', (entrada) => {
  const numero = parseInt(entrada)

  
  if (arreglo.includes(numero)) {
    console.log(`El número ${numero} está presente en el arreglo.`)
  } else {
    console.log(`El número ${numero} no está presente en el arreglo.`)
  }

  
  rl.close()
})

