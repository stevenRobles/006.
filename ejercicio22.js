// 22.	Signo zodiacal: Pide al usuario que ingrese su mes y día de nacimiento, luego determina su signo zodiacal. 
// Puedes usar una serie de declaraciones if para comparar las fechas ingresadas con las fechas límite de cada signo zodiacal.

const readline = require('readline')

// Crear una interfaz de readline
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

// Función para determinar el signo zodiacal
function obtenerSignoZodiacal(dia, mes) {
  if ((mes == 1 && dia >= 20) || (mes == 2 && dia <= 18)) {
    return 'Acuario';
  } else if ((mes == 2 && dia >= 19) || (mes == 3 && dia <= 20)) {
    return 'Piscis';
  } else if ((mes == 3 && dia >= 21) || (mes == 4 && dia <= 19)) {
    return 'Aries';
  } else if ((mes == 4 && dia >= 20) || (mes == 5 && dia <= 20)) {
    return 'Tauro';
  } else if ((mes == 5 && dia >= 21) || (mes == 6 && dia <= 20)) {
    return 'Géminis';
  } else if ((mes == 6 && dia >= 21) || (mes == 7 && dia <= 22)) {
    return 'Cáncer';
  } else if ((mes == 7 && dia >= 23) || (mes == 8 && dia <= 22)) {
    return 'Leo';
  } else if ((mes == 8 && dia >= 23) || (mes == 9 && dia <= 22)) {
    return 'Virgo';
  } else if ((mes == 9 && dia >= 23) || (mes == 10 && dia <= 22)) {
    return 'Libra';
  } else if ((mes == 10 && dia >= 23) || (mes == 11 && dia <= 21)) {
    return 'Escorpio';
  } else if ((mes == 11 && dia >= 22) || (mes == 12 && dia <= 21)) {
    return 'Sagitario';
  } else if ((mes == 12 && dia >= 22) || (mes == 1 && dia <= 19)) {
    return 'Capricornio'
  } else {
    return 'Fecha inválida'
  }
}

// Solicitar al usuario su día y mes de nacimiento
rl.question('Introduce tu mes de nacimiento (1-12): ', (mesInput) => {
  rl.question('Introduce tu día de nacimiento (1-31): ', (diaInput) => {
    const mes = parseInt(mesInput)
    const dia = parseInt(diaInput)

    if (isNaN(mes) || isNaN(dia) || mes < 1 || mes > 12 || dia < 1 || dia > 31) {
      console.log('Por favor, introduce una fecha válida.')
    } else {
      const signo = obtenerSignoZodiacal(dia, mes)
      console.log(`Tu signo zodiacal es: ${signo}`)
    }

    // Cerrar la interfaz de readline
    rl.close()
  })
})
