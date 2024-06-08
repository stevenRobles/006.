// 17.	Mayor de tres números: Solicita tres números y determina cuál es el mayor de ellos.

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Introduce el primer número: ", (num1) => {
  rl.question("Introduce el segundo número: ", (num2) => {
    rl.question("Introduce el tercer número: ", (num3) => {
      const maxNumber = Math.max(Number(num1), Number(num2), Number(num3));
      console.log(`El mayor de los tres números es: ${maxNumber}`);
      rl.close();
    });
  });
});
