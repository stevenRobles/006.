// 51.	Inversión de un arreglo: Invierte el orden de los elementos en un arreglo. Por ejemplo, [1, 2, 3] se convierte en [3, 2, 1].



const arregloOriginal = [1, 2, 3, 4, 5]


const arregloCopia = arregloOriginal.slice()


const arregloInvertido = arregloCopia.reverse()


console.log("Arreglo original:", arregloOriginal)
console.log("Arreglo invertido:", arregloInvertido)
