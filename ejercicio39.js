// 39.	Contador de digitos: Utiliza un bucle for para contar el numero de dígitos en una palabra ingresada por el usuario.

const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

rl.question('Ingresa una palabra para contar el número de dígitos: ', (palabra) => {
  
  let contadorDigitos = 0

  
  for (let i = 0; i < palabra.length; i++) {
    
    const caracter = palabra.charAt(i)

    
    if (caracter >= '0' && caracter <= '9') {
      contadorDigitos++
    }
  }

  console.log(`El número de dígitos en "${palabra}" es: ${contadorDigitos}`)

  rl.close()
})

