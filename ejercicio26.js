// 26.	Calculadora de precio con descuento: 
// Crea un programa que permita a un usuario ingresar el precio de un artículo y un porcentaje de descuento. 
// El programa debe calcular y mostrar el precio final después del descuento.
const readline = require('readline')


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

function calcularPrecioConDescuento(precio, descuento) {
  return precio - (precio * (descuento / 100))
}


rl.question('Introduce el precio del artículo: ', (precioInput) => {
  const precio = parseFloat(precioInput)

  if (isNaN(precio) || precio < 0) {
    console.log('Por favor, introduce un precio válido.')
    rl.close()
    return
  }

  
  rl.question('Introduce el porcentaje de descuento: ', (descuentoInput) => {
    const descuento = parseFloat(descuentoInput)

    if (isNaN(descuento) || descuento < 0 || descuento > 100) {
      console.log('Por favor, introduce un porcentaje de descuento válido.')
    } else {
      const precioFinal = calcularPrecioConDescuento(precio, descuento);
      console.log(`El precio final después del descuento es: ${precioFinal.toFixed(2)}`)
    }

    
    rl.close()
  })
})
