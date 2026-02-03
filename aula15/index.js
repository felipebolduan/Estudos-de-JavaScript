// Strings são indexadas e iteráveis
//               01234567
let umaString = 'Um texto';

console.log(umaString);
console.log(umaString[5]); // Retorna o elemento da posição
console.log(umaString.charAt(5)); // Retorna o elemento da posição
console.log(umaString.indexOf('texto')); // Retorna em que indice a determinada palavra inicia
console.log(umaString.match(/[a-z]/g)); // Formula usada para achar todos os caracteres que batem com a expressão regular
console.log(umaString.search(/[a-z]/g)); // Procura o indice do primeiro caracter que condiz a expressão
console.log(umaString.length) // calcula o tamanho da string
console.log(umaString.toUpperCase()); // Tudo maiusculo
console.log(umaString.toLowerCase()); // Tudo minusculo