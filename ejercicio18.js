// 18.	Edad mínima para votar: Pregunta la edad del usuario y verifica si es elegible para votar (18 años o más).
const readline = require('readline')
const rl= readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})
rl.question("Ingresa tu edad:", (edad) =>{
    edad = parseInt(edad)
    if (edad >= 18 )
        console.log("Puedes sufragar.")
     else {
        console.log("No puedes.")
     }
        rl.close()
})