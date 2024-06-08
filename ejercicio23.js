// 23.	Día del mes con respecto a la segunda quincena: Solicita al usuario que ingrese un número de día del mes (por ejemplo, del 1 al 31) 
// y verifica si ese día pertenece a la primera quincena (días 1-15) o a la segunda quincena (días 16- 31).
const readline = require('readline')

// Crear una interfaz de readline
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Función para determinar la quincena
function determinarQuincena(dia) {
  if (dia >= 1 && dia <= 15) {
    return 'primera quincena'
  } else if (dia >= 16 && dia <= 31) {
    return 'segunda quincena'
  } else {
    return 'día inválido'
  }
}

// Solicitar al usuario que introduzca un día del mes
rl.question('Introduce un día del mes (1-31): ', (input) => {
  const dia = parseInt(input)

  if (isNaN(dia) || dia < 1 || dia > 31) {
    console.log('Por favor, introduce un número de día válido entre 1 y 31.')
  } else {
    const quincena = determinarQuincena(dia)
    console.log(`El día ${dia} pertenece a la ${quincena}.`)
  }

  // Cerrar la interfaz de readline
  rl.close()
})
