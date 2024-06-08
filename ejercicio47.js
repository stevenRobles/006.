// 47.	Promedio de calificaciones: Crea un arreglo de calificaciones (números decimales) y calcula el promedio de las calificaciones.


const calificaciones = [8.5, 9.0, 7.5, 10.0, 6.5, 8.0]


let suma = 0


for (let i = 0; i < calificaciones.length; i++) {
  suma += calificaciones[i]
}


const promedio = suma / calificaciones.length


console.log("El promedio de las calificaciones es:", promedio.toFixed(2))
