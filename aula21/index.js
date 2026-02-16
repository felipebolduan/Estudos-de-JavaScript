// INTRODUÇÃO BÁSICA A FUNÇÕES

function saudacao(nome) {
    return `Bom dia, ${nome}!`;
}

const variavel = saudacao ('Felipe');
console.log (variavel);

function soma (x = 0, y = 0) {
    const resultado = x + y;
    return resultado;
}

function subtracao (x, y) {
    const resultado = x - y;
    return resultado;
}

console.log(soma());
console.log(soma(2, 2));
console.log(soma(5, 5));
console.log(soma(3, 4));
console.log(soma(2, -2));
console.log(soma(-2, 2));
console.log(subtracao(2, 2));
console.log(subtracao(5, 5));
console.log(subtracao(3, 4));
console.log(subtracao(2, -2));
console.log(subtracao(-2, 2));


// Criando função anonima

const raiz = function(n) {
    return n ** 0.5
};

console.log (`Raiz quadrada do número é: ${raiz(9)}`);

// Criando uma função arrow function

const raizQuadrada = n => n ** 0.5;
console.log (`Raiz quadrada do número é: ${raizQuadrada(16)}`);