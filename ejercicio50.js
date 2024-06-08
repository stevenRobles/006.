// 50.	Contar elementos pares: Cuenta cuántos números pares hay en un arreglo de números enteros.


const numeros = [5, 10, 15, 20, 25, 30, 35, 40]


let contadorPares = 0


for (let i = 0; i < numeros.length; i++) {
  if (numeros[i] % 2 === 0) {
    contadorPares++
  }
}

console.log("La cantidad de números pares en el arreglo es:", contadorPares)
