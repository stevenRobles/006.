// // 40.	Adivina el número: Genera un número aleatorio y pide al usuario que adivine el número.
//  Utiliza un bucle while para repetir la solicitud hasta que adivine correctamente.

const readline = require('readline')


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})


const numeroAleatorio = Math.floor(Math.random() * 100) + 1


function adivinaElNumero() {
  rl.question('Adivina el número (entre 1 y 100): ', (respuesta) => {
    const numeroAdivinado = parseInt(respuesta)

    
    if (isNaN(numeroAdivinado)) {
      console.log('Por favor, ingresa un número válido.')
    } else if (numeroAdivinado < 1 || numeroAdivinado > 100) {
      console.log('Por favor, ingresa un número entre 1 y 100.')
    } else if (numeroAdivinado < numeroAleatorio) {
      console.log('El número es mayor. Intenta nuevamente.')
    } else if (numeroAdivinado > numeroAleatorio) {
      console.log('El número es menor. Intenta nuevamente.')
    } else {
      console.log('¡Felicidades! Has adivinado el número.')
      rl.close()
      return
    }

   
    adivinaElNumero()
  })
}


adivinaElNumero();
