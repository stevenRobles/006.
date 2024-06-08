
// 62.	Función con parámetros y return para sumar una lista de números.
function sumarListaNumeros(listaNumeros) {
    let suma = 0
    for (let numero of listaNumeros) {
      suma += numero
    }
    return suma
  }
  
  
  const numeros = [1, 2, 3, 4, 5]
  const sumaTotal = sumarListaNumeros(numeros)
  console.log("La suma de los números es:", sumaTotal)
  