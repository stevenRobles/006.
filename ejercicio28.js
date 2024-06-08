// 28.	Calculadora de sueldo con aumento: Pide al usuario que ingrese su salario actual y el porcentaje de aumento que recibirá.
//  Calcula y muestra el nuevo salario después del aumento.

const readline = require('readline')


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})


function calcularNuevoSalario(salario, aumento) {
  return salario + (salario * (aumento / 100))
}


rl.question('Introduce tu salario actual: ', (salarioInput) => {
  const salario = parseFloat(salarioInput)

  if (isNaN(salario) || salario < 0) {
    console.log('Por favor, introduce un salario válido.')
    rl.close()
    return
  }


  rl.question('Introduce el porcentaje de aumento: ', (aumentoInput) => {
    const aumento = parseFloat(aumentoInput)

    if (isNaN(aumento) || aumento < 0) {
      console.log('Por favor, introduce un porcentaje de aumento válido.')
    } else {
      const nuevoSalario = calcularNuevoSalario(salario, aumento)
      console.log(`Tu nuevo salario después del aumento es: ${nuevoSalario.toFixed(2)}`)
    }

    rl.close()
  })
})
