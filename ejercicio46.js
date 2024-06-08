// 46.	Suma de elementos: Crea un arreglo de números enteros y calcula la suma de todos sus elementos.


const numeros = [5, 10, 15, 20, 25, 30]


let suma = 0


for (let i = 0; i < numeros.length; i++) {
  suma += numeros[i]
}


console.log("La suma de todos los elementos del arreglo es:", suma)
