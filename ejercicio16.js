// 16.	Copiar palabra: Escribe un programa que lea dos palabras y concatena en otra variable las dos palabras
const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

rl.question("ingresa la primer palabra: ", (p1) => {
    rl.question("ingresa la segunda  palabra: ", (p2) =>{

 Np = p1 + p2 
 console.log("las palabras concatenadas son:" , Np )

 rl.close()


    })
})