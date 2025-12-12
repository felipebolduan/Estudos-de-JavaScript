const nome = 'Felipe';
const sobrenome = 'Bolduan';
let idade;
let peso;
let altura;
let imc;
let anoNascimento;

idade = 23;
peso = 103;
altura = 1.91;
imc = peso / (altura ** 2);
anoNascimento = 2025 - idade;


console.log (nome, sobrenome, 'tem', idade, 'anos, pesa', peso, 'kg tem', altura, 'de altura e seu IMC é de', imc, 'e nasceu em', anoNascimento + '.');

console.log (`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kg tem ${altura} de altura e seu IMC é de ${imc} e nasceu em ${anoNascimento}.`); // Modo mais moderno de representação