// 12.	Área de un triángulo: Pide al usuario que ingrese la base y la altura de un triángulo, luego calcula y muestra su área.
const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})
rl.question("Ingresa la base del triangulo:" , (base) => {
    rl.question("Ingresa la altura:", (altura) =>{
    
        base = parseInt(base) 
        altura = parseInt(altura)

       respuesta = base * altura / 2 

     console.log("EL area es:", + respuesta)


     rl.close()
    })
}) 
