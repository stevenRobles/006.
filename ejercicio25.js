// 25.	Frases iguales: Escribir un programa que ingrese dos frases e indique si son iguales
const readline = require('readline')

// Crear una interfaz de readline
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

// Solicitar al usuario que introduzca la primera frase
rl.question('Introduce la primera frase: ', (frase1) => {
  // Solicitar al usuario que introduzca la segunda frase
  rl.question('Introduce la segunda frase: ', (frase2) => {
    // Comparar las dos frases
    if (frase1 === frase2) {
      console.log('Las frases son iguales.')
    } else {
      console.log('Las frases son diferentes.')
    }
    
    // Cerrar la interfaz de readline
    rl.close()
  })
})
