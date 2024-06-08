// 31.	Descuento por antigüedad en la empresa: Pregunta al usuario cuántos años ha estado trabajando en una empresa y calcula su bono de antigüedad.
//  Si ha trabajado más de 5 años, otorga un bono del 5% sobre su salario.

const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})


function calcularBonoAntiguedad(salario, años) {
  const BONO = 0.05
  if (años > 5) {
    return salario * BONO
  }
  return 0
}


rl.question('¿Cuántos años has trabajado en la empresa? ', (añosInput) => {
  const años = parseInt(añosInput)

  if (isNaN(años) || años < 0) {
    console.log('Por favor, introduce un número de años válido.')
    rl.close()
    return
  }

  // Solicitar al usuario que introduzca su salario
  rl.question('Introduce tu salario actual: ', (salarioInput) => {
    const salario = parseFloat(salarioInput)

    if (isNaN(salario) || salario < 0) {
      console.log('Por favor, introduce un salario válido.')
    } else {
      const bono = calcularBonoAntiguedad(salario, años)
      if (bono > 0) {
        console.log(`Has trabajado más de 5 años. Tu bono de antigüedad es: $${bono.toFixed(2)}`)
      } else {
        console.log('No tienes derecho a un bono de antigüedad.')
      }
    }

  
    rl.close()
  })
})

