// 20.	Número positivo, negativo o cero: Pide al usuario que ingrese un número y muestra si es positivo, negativo o cero.

const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

rl.question("Ingresa un numero:", (numero) =>{
numero = parseInt(numero)

 if (numero > 0 )
    console.log("el numero es positivo ")
else if (numero == 0 )
    console.log("el numero es cero")
else 
    console.log("EL numero es negativo ")
    rl.close()
})
