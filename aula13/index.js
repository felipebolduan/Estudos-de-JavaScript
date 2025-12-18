// Exercicio de variáveis - Transformar valores de A em B, de B em C e de C em A

let varA = 'A'; // Ter valor de B
let varB = 'B'; // Ter valor de C
let varC = 'C'; // Ter valor de A
let temporario;

temporario = varA
varA = varB;
varB = varC;
varC = temporario;

console.log(varA, varB, varC);