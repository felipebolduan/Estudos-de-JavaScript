/* 
* Operadores Aritméticos (+ - / *)
* Operador + (Adição e Concatenação)
* Operador - (Subtração)
* Operador * (Multiplicação)
* Operador / (Divisão)
* Operador ** (Potenciação)
* Operador % (Resto da Divisão)
*/

const num1 = 10;
const num2 = parseInt('2');
const concatenar = 'ABC';
console.log(typeof num2);
console.log(num1 + num2);
console.log(num1 + concatenar); // Concatenação
console.log (num1 ** num2); //Potenciação

/* Incrementação */

let contador = 1;
contador++; // Incrementa e já atualiza o valor da variável
console.log(`variável é igual a ${contador}`);

/* Operadores de Atribuição */

let contador2 = 2;
contador2 *= 5;
console.log (`variável contador2 é igual a ${contador2}`);