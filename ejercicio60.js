// 60.	Función con parámetros para contar un carácter en una frase.

function contarCaracter(frase, caracter) {
    let contador = 0
    for (let i = 0; i < frase.length; i++) {
      if (frase[i] === caracter) {
        contador++
      }
    }
    return contador
  }
  
  
  const frase = "La lluvia en Sevilla es una maravilla."
  const caracter = "a"
  const cantidad = contarCaracter(frase, caracter)
  console.log(`El carácter '${caracter}' aparece ${cantidad} veces en la frase.`)
  