// 33.	Calculadora de descuento por lealtad del cliente: Pide al usuario que ingrese el total de sus compras mensuales durante un año. 
// Si el total es superior a $500, aplica un descuento del 10% en la próxima compra.


const readline = require('readline')


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})


function calcularDescuentoLealtad(totalCompras) {
  const LIMITE_DESCUENTO = 500
  const DESCUENTO = 0.10

  if (totalCompras > LIMITE_DESCUENTO) {
    return true
  }
  return false
}


rl.question('Introduce el total de tus compras mensuales durante un año: ', (totalInput) => {
  const totalCompras = parseFloat(totalInput)

  if (isNaN(totalCompras) || totalCompras < 0) {
    console.log('Por favor, introduce un total de compras válido.')
  } else {
    const aplicaDescuento = calcularDescuentoLealtad(totalCompras)
    if (aplicaDescuento) {
      console.log('¡Felicidades! Has superado el límite de $500 en compras anuales y tienes derecho a un descuento del 10% en tu próxima compra.')
    } else {
      console.log('Aún no has superado el límite de $500 en compras anuales.')
    }
  }

  
  rl.close()
})
