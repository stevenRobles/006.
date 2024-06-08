// 59.	Función con return para convertir grados Celsius a Fahrenheit.

function celsiusToFahrenheit(celsius) {
    const fahrenheit = (celsius * 9/5) + 32
    return fahrenheit
  }
  
  
  const temperaturaCelsius = 30
  const temperaturaFahrenheit = celsiusToFahrenheit(temperaturaCelsius)
  console.log(temperaturaCelsius + " grados Celsius equivalen a " + temperaturaFahrenheit + " grados Fahrenheit.")
  