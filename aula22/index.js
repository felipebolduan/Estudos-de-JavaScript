// Objetos (Básico)

// Objetos são criadas em colchetes e os atributos são separados por virgula.

// const pessoa1 = {
//     nome: 'Felipe',
//     sobrenome: 'Bolduan',
//     idade: 24,
// };

// console.log (pessoa1.nome);
// console.log (pessoa1.sobrenome);
// console.log (pessoa1.idade);

//Para que não precisemos criar varios objetos podemos criar uma função e colocar o objeto dentro dela.
function criaPessoa (nome, sobrenome, idade) {
    return {
        nome: nome,
        sobrenome: sobrenome,
        idade: idade,
    };
}

const pessoa1 = criaPessoa('Felipe', 'Bolduan', '25');

console.log(pessoa1.nome);