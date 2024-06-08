// 56.	Función sin return para determinar si un número es par o impar.


function determinarParImpar() {
    const numero = Math.floor(Math.random() * 100); 
    if (numero % 2 === 0) {
      console.log(numero + " es un número par.")
    } else {
      console.log(numero + " es un número impar.")
    }
  }
  
  
  determinarParImpar()
  