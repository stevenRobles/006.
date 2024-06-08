// 52.	Buscar el índice: Pide al usuario que ingrese un valor y encuentra el índice de ese valor en un arreglo. 
// Si el valor aparece más de una vez, muestra todos los índices.

const readline = require('readline')


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})


const arreglo = [5, 10, 15, 20, 10, 25, 30, 10];

rl.question('Ingresa un valor para encontrar su índice en el arreglo: ', (valor) => {
  const indice = []

  
  for (let i = 0; i < arreglo.length; i++) {
    if (arreglo[i] == valor) {
      indice.push(i)
    }
  }

 
  if (indice.length === 0) {
    console.log(`El valor ${valor} no se encuentra en el arreglo.`)
  } else {
    console.log(`El valor ${valor} está presente en el arreglo en el índice(s): ${indice.join(', ')}.`)
  }

  
  rl.close()
})
