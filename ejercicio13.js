// 13.	Número par o impar: Solicita al usuario que ingrese un número e indica si es par o impar
const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})
rl.question("Ingresa un numero:", (numero)=>{
  numero = parseInt(numero)
  if (numero % 2 == 0 ){
    console.log("El numero es par")
  }
  else {
    console.log("EL numero es impar ")
  }
  

rl.close()
})