// 14.	Calculadora simple: Crea una calculadora que realice operaciones básicas como
//  suma, resta, multiplicación y división, según la elección del usuario.
const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

console.log("Calculadora Simple")

rl.question('Introduce el primer número: ', (num1) => {
    rl.question('Introduce el segundo número: ', (num2) => {
        rl.question('Elige operación (sumar, restar, multiplicar, dividir): ', (operacion) => {
            const primerNumero = parseFloat(num1)
            const segundoNumero = parseFloat(num2)

            let resultado

            switch (operacion.toLowerCase()) {
                case 'sumar':
                    resultado = primerNumero + segundoNumero
                    break
                case 'restar':
                    resultado = primerNumero - segundoNumero
                    break
                case 'multiplicar':
                    resultado = primerNumero * segundoNumero
                    break
                case 'dividir':
                    if (segundoNumero !== 0) {
                        resultado = primerNumero / segundoNumero
                    } else {
                        console.log("Error: División por cero")
                        rl.close();
                        return
                    }
                    break
                default:
                    console.log("Operación inválida")
                    rl.close()
                    return
            }

            console.log(`El resultado es: ${resultado}`)
            rl.close()
        })
    })
})
