// 34.	Calculadora de descuento por volumen de compra: Permite al usuario ingresar la cantidad de unidades de un producto que va a comprar y el precio unitario. 
// Aplica descuentos por volumen de compra según las siguientes reglas:
// 10-50 unidades: 5% de descuento
// 51-100 unidades: 10% de descuento
// Más de 100 unidades: 15% de descuento


const readline = require('readline')


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})


function calcularDescuentoVolumen(cantidad) {
  if (cantidad >= 10 && cantidad <= 50) {
    return 0.05;
  } else if (cantidad >= 51 && cantidad <= 100) {
    return 0.10 
  } else if (cantidad > 100) {
    return 0.15
  }
  return 0
}


rl.question('Introduce la cantidad de unidades: ', (cantidadInput) => {
  const cantidad = parseInt(cantidadInput)

  if (isNaN(cantidad) || cantidad <= 0) {
    console.log('Por favor, introduce una cantidad válida.');
    rl.close()
    return
  }

  rl.question('Introduce el precio unitario: ', (precioInput) => {
    const precioUnitario = parseFloat(precioInput)

    if (isNaN(precioUnitario) || precioUnitario <= 0) {
      console.log('Por favor, introduce un precio unitario válido.');
      rl.close()
      return
    }

    const descuento = calcularDescuentoVolumen(cantidad)
    const precioTotal = cantidad * precioUnitario
    const precioConDescuento = precioTotal - (precioTotal * descuento)

    console.log(`El precio total sin descuento es: $${precioTotal.toFixed(2)}`)
    console.log(`El descuento aplicado es: ${descuento * 100}%`)
    console.log(`El precio total con descuento es: $${precioConDescuento.toFixed(2)}`)

    
    rl.close()
  })
})
