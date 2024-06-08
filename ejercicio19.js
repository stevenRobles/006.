// 19.	Calculadora de BMI: Crea un programa que calcule el índice de masa corporal (BMI) 
// a partir del peso y la altura del usuario, y luego indique si está en una categoría de peso saludable.
const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

function calcularBMI(peso, altura) {
  return peso / (altura * altura)
}

function obtenerCategoriaBMI(bmi) {
  if (bmi < 18.5) {
    return "Bajo peso"
  } else if (bmi < 24.9) {
    return "Peso normal"
  } else if (bmi < 29.9) {
    return "Sobrepeso"
  } else {
    return "Obesidad"
  }
}

rl.question("Introduce tu peso en kilogramos: ", (peso) => {
  rl.question("Introduce tu altura en metros: ", (altura) => {
    const bmi = calcularBMI(Number(peso), Number(altura))
    const categoriaBMI = obtenerCategoriaBMI(bmi)
    console.log(`Tu BMI es: ${bmi.toFixed(2)}`)
    console.log(`Estás en la categoría de: ${categoriaBMI}`)
    rl.close()
  })
})
