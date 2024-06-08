// 42.	Suma de números impares: Utiliza un bucle while para calcular la suma de los números impares del 1 al 100.

let sumaImpares = 0
let i = 1;

while (i <= 100) {
  if (i % 2 !== 0) {
    sumaImpares += i
  }
  i++
}

console.log("La suma de los números impares del 1 al 100 es:", sumaImpares)
