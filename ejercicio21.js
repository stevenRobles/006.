// 21.	Año bisiesto: Solicita al usuario un año y determina si es un año bisiesto o no.
//  Un año bisiesto es divisible por 4, pero no por 100, a menos que también sea divisible por 400.

const readline = require('readline')


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})


function esBisiesto(año) {
  if ((año % 4 === 0 && año % 100 !== 0) || (año % 400 === 0)) {
    return true
  } else {
    return false;
  }
}


rl.question('Introduce un año: ', (input) => {
  const año = parseInt(input);
  
  if (isNaN(año)) {
    console.log('Por favor, introduce un número válido.')
  } else {
    if (esBisiesto(año)) {
      console.log(`El año ${año} es bisiesto.`)
    } else {
      console.log(`El año ${año} no es bisiesto.`)
    }
  }
  

  rl.close()
})
