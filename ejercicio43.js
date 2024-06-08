// 43.	Contador de caracteres: Escribir un programa que lea una palabra y presenta cuantos caracteres hay en dicha palabra.

const readline = require('readline')


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})


rl.question('Ingresa una palabra para contar el número de caracteres: ', (palabra) => {
  
  const numCaracteres = palabra.length
  
  console.log(`El número de caracteres en "${palabra}" es: ${numCaracteres}`)

  
  rl.close()
})
