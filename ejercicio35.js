// // 35.	Calculadora de costo de servicio: Pregunta al usuario cuántas horas de servicio necesita y calcula el costo total. 
// Si las horas son más de 10, aplica un descuento del 20%. 


const readline = require('readline')


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function calcularCostoServicio(horas) {
  const TARIFA_HORA = 25
  const DESCUENTO = 0.20
  let costoTotal

  if (horas <= 0) {
    return 0;
  } else if (horas <= 10) {
    costoTotal = horas * TARIFA_HORA
  } else {
    costoTotal = horas * TARIFA_HORA
    costoTotal -= costoTotal * DESCUENTO
  }

  return costoTotal
}


rl.question('¿Cuántas horas de servicio necesita? ', (horasInput) => {
  const horas = parseFloat(horasInput)

  if (isNaN(horas) || horas < 0) {
    console.log('Por favor, introduce un número de horas válido.')
  } else {
    const costoTotal = calcularCostoServicio(horas);
    console.log(`El costo total del servicio es: $${costoTotal.toFixed(2)}`)
  }

  
  rl.close()
})

