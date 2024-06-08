// 45.	Cuenta regresiva: Pide al usuario que ingrese un número entero positivo y utiliza un bucle while para mostrar una cuenta regresiva desde ese número hasta 1.

const readline = require('readline')


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})


function cuentaRegresiva(numero) {
  while (numero > 0) {
    console.log(numero)
    numero--
  }
  console.log("¡Cuenta regresiva finalizada!")
}


rl.question('Ingresa un número entero positivo para iniciar la cuenta regresiva: ', (entrada) => {
  const numero = parseInt(entrada)

  if (isNaN(numero) || numero <= 0) {
    console.log('Por favor, ingresa un número entero positivo válido.')
  } else {
    cuentaRegresiva(numero)
  }

  
  rl.close()
})
