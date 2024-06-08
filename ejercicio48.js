// 48.	Mayor y menor valor: Encuentra el valor máximo y mínimo en un arreglo de números enteros

const numeros = [45, 2, 9, 18, 29, 100, 56, 33]


let maximo = numeros[0]
let minimo = numeros[0]


for (let i = 1; i < numeros.length; i++) {
  if (numeros[i] > maximo) {
    maximo = numeros[i]
  }
  if (numeros[i] < minimo) {
    minimo = numeros[i]
  }
}


console.log("El valor máximo en el arreglo es:", maximo)
console.log("El valor mínimo en el arreglo es:", minimo)
