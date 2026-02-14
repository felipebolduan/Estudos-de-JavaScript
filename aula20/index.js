// Estudo de Arrays
// Arrays são idexados (Assim como Strings)

//Indice:        0         1           2         3
const alunos = ['Felipe', 'Henrique', 'Rafael', 'Maria']; // Arrays são criados utilizando colchetes (Suporta qualquer tipo de dado: String, Numbers, Boolean, etc.)
alunos[4] = 'Wilson'; // Força a adição de um item no array, porém não é muito eficas pois teriamos que saber o tamanho do array
alunos[alunos.length] = 'Eliane'; // Adiciona um item no array de acordo com o tamanho desse array
alunos.push('Opa Rolfi'); // Metodo mais recomendado (Ele já coloca no final do array)
alunos.unshift('Oma Ruth');  // Coloca o item no inicio do array e move os indices para frente
const removido = alunos.pop(); // Remove o ultimo elemento do array
const removido_2 = alunos.shift(); // Remove o primeiro elemento do array

console.log(alunos); // Consulta todos os itens de um array
console.log(`Qual é o nome que está no indice 3: ${alunos[3]}`); // Consulta o item na posição especifica do array
console.log(`Tamanho do Array: ${alunos.length}`); // Calcula o tamanho do array
console.log(`Qual o indice do nome "Maria": ${alunos.indexOf('Maria')}`); // consulta em que indice está o nome "Maria"
console.log(`O que foi removido: ${removido}`);
console.log(`O que foi removido: ${removido_2}`);
console.log (alunos.slice(0)); // Consegue fazer um recorte do array
console.log (typeof alunos); // Retorna o tipo, no caso dos Arrays vai ser um objeto
console.log (alunos instanceof Array); // Valida se a constante alunos é uma instancia de array