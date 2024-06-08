// 29.	Calculadora de compra con múltiples artículos: Permite al usuario ingresar el precio y la cantidad de varios artículos que está comprando. 
// Calcula el total de la compra y aplica un descuento del 10% si el total es mayor a cierta cantidad (por ejemplo, $100).

const readline = require('readline')


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

let totalCompra = 0
let numeroArticulos = 0


function calcularTotalConDescuento(total) {
  const DESCUENTO = 0.10
  const LIMITE_DESCUENTO = 100
  if (total > LIMITE_DESCUENTO) {
    return total * (1 - DESCUENTO)
  }
  return total
}


function solicitarDetallesArticulo() {
  rl.question('Introduce el precio del artículo: ', (precioInput) => {
    const precio = parseFloat(precioInput)

    if (isNaN(precio) || precio < 0) {
      console.log('Por favor, introduce un precio válido.')
      solicitarDetallesArticulo()
      return
    }

    rl.question('Introduce la cantidad del artículo: ', (cantidadInput) => {
      const cantidad = parseInt(cantidadInput)

      if (isNaN(cantidad) || cantidad <= 0) {
        console.log('Por favor, introduce una cantidad válida.');
        solicitarDetallesArticulo()
        return;
      }

      totalCompra += precio * cantidad
      numeroArticulos++

      rl.question('¿Quieres añadir otro artículo? (sí/no): ', (respuesta) => {
        if (respuesta.toLowerCase() === 'sí' || respuesta.toLowerCase() === 'si') {
          solicitarDetallesArticulo()
        } else {
          const totalConDescuento = calcularTotalConDescuento(totalCompra)
          console.log(`El total de tu compra es: $${totalCompra.toFixed(2)}`)
          if (totalCompra > 100) {
            console.log(`Se ha aplicado un descuento del 10%. El total con descuento es: $${totalConDescuento.toFixed(2)}`)
          }
          rl.close()
        }
      })
    })
  })
}

