// Contas seguem o padrão IEEE 754-2008

let num1 = 1;
let num2 = 2.5384313541341;
let num3 = 1500;
let num4 = 0.7;
let num5 = 0.1;

// console.log (num1.toString() + num2); // função toString força a variável a ser uma string.
// num1 = num1.toString(); // Transforma a váriavel definitivamente em String
console.log (typeof num1);
console.log (num3.toString(2)); // Retorna o número em binário
console.log (num2.toFixed(2)); // Arredonda e retorna somente o número de casas solicitado
console.log (Number.isInteger(num2)); // Valida se o número é inteiro


num4 += num5; // 0.8
num4 += num5; // 0.9
num4 += num5; // 1.0
num4 += num5; // 1.1
num4 = parseFloat(num4.toFixed(2)); // Conseguimos contornar a imprecisão dessa forma.
console.log (num4); // Teste para validar a imprecisão das contas
console.log (Number.isInteger(num4));


let temporaria = num3 * 'Olá';
console.log(Number.isNaN(temporaria)); // Retorna true se a conta for invalida.