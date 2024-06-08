// 41.	Contador de Alfabeto: Utiliza un bucle for para contar el número de letras del alfabeto(a..z) en una palabra ingresada por el usuario.

const readline = require('readline')


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})


function contarLetras(palabra) {
  
  palabra = palabra.toLowerCase()

  
  let contadorLetras = 0

 
  for (let i = 0; i < palabra.length; i++) {
    const caracter = palabra.charAt(i)

    
    if (caracter >= 'a' && caracter <= 'z') {
      contadorLetras++
    }
  }

  return contadorLetras
}


rl.question('Ingresa una palabra para contar el número de letras del alfabeto: ', (palabra) => {
  const numLetras = contarLetras(palabra)
  console.log(`El número de letras del alfabeto en "${palabra}" es: ${numLetras}`)

 
  rl.close()
})
