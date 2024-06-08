// 32.	Calculadora de envío con tarifas diferentes: Crea un programa que permita al usuario ingresar la distancia de envío y calcule el costo del envío.
//  Si la distancia es inferior a 50 km, el costo es de $10. Si la distancia es de 50 km o más, el costo es de $20.


const readline = require('readline')


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})


function calcularCostoEnvio(distancia) {
  const TARIFA_CORTA = 10
  const TARIFA_LARGA = 20

  if (distancia < 50) {
    return TARIFA_CORTA
  } else {
    return TARIFA_LARGA
  }
}


rl.question('Introduce la distancia de envío en kilómetros: ', (distanciaInput) => {
  const distancia = parseFloat(distanciaInput)

  if (isNaN(distancia) || distancia < 0) {
    console.log('Por favor, introduce una distancia válida en kilómetros.')
  } else {
    const costoEnvio = calcularCostoEnvio(distancia);
    console.log(`El costo del envío es: $${costoEnvio.toFixed(2)}`)
  }

  // Cerrar la interfaz de readline
  rl.close()
})
