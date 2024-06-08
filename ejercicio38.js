// 38.	Contador de vocales: Utiliza un bucle while para contar el número de vocales en una palabra ingresada por el usuario
const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

rl.question('Ingresa una palabra para contar el número de vocales: ', (palabra) => {
 
  palabra = palabra.toLowerCase()

 
  let contadorVocales = 0

  
  let indice = 0

  
  while (indice < palabra.length) {
    
    const caracter = palabra.charAt(indice)

    
    if (caracter === 'a' || caracter === 'e' || caracter === 'i' || caracter === 'o' || caracter === 'u') {
      contadorVocales++
    }

    
    indice++
  }

  console.log(`El número de vocales en "${palabra}" es: ${contadorVocales}`)

  rl.close()
})
