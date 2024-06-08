// 27.	Calculadora de factura con impuestos: Solicita al usuario que ingrese el total de una factura y el porcentaje de impuestos aplicado. 
// Luego, calcula y muestra el monto total a pagar, incluyendo los impuestos.

const readline = require('readline')


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})


function calcularTotalConImpuestos(total, impuestos) {
  return total + (total * (impuestos / 100));
}


rl.question('Introduce el total de la factura: ', (totalInput) => {
  const total = parseFloat(totalInput)

  if (isNaN(total) || total < 0) {
    console.log('Por favor, introduce un total válido.')
    rl.close()
    return
  }


  rl.question('Introduce el porcentaje de impuestos: ', (impuestosInput) => {
    const impuestos = parseFloat(impuestosInput)

    if (isNaN(impuestos) || impuestos < 0) {
      console.log('Por favor, introduce un porcentaje de impuestos válido.')
    } else {
      const totalConImpuestos = calcularTotalConImpuestos(total, impuestos)
      console.log(`El monto total a pagar, incluyendo los impuestos, es: ${totalConImpuestos.toFixed(2)}`)
    }

  
    rl.close()
  })
})
