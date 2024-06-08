// 24.	Día de la semana: Pide al usuario que ingrese un número del 1 al 7, donde 1 representa el domingo, 2 el lunes, 3 el martes, y así sucesivamente. Luego, 
// utiliza una estructura switch para mostrar el nombre del día de la semana correspondiente al número ingresado.
const readline = require('readline');

// Crear una interfaz de readline
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Función para determinar el día de la semana
function obtenerDiaDeLaSemana(numero) {
  let dia;
  switch (numero) {
    case 1:
      dia = 'Domingo';
      break;
    case 2:
      dia = 'Lunes';
      break;
    case 3:
      dia = 'Martes';
      break;
    case 4:
      dia = 'Miércoles';
      break;
    case 5:
      dia = 'Jueves';
      break;
    case 6:
      dia = 'Viernes';
      break;
    case 7:
      dia = 'Sábado';
      break;
    default:
      dia = 'Número inválido';
  }
  return dia;
}

// Solicitar al usuario que introduzca un número del 1 al 7
rl.question('Introduce un número del 1 al 7: ', (input) => {
  const numero = parseInt(input);

  if (isNaN(numero) || numero < 1 || numero > 7) {
    console.log('Por favor, introduce un número válido entre 1 y 7.');
  } else {
    const diaDeLaSemana = obtenerDiaDeLaSemana(numero);
    console.log(`El número ${numero} corresponde a ${diaDeLaSemana}.`);
  }

  // Cerrar la interfaz de readline
  rl.close();
});
