const titulo = document.getElementById('numero-titulo')
const texto = document.getElementById('texto')
const numero = Number(prompt ('Digite um número:'));

titulo.innerText += `Seu número é: ${numero}`;
texto.innerHTML += `Raiz Quadrada: ${numero**0.5}<br/>`;
texto.innerHTML += `${numero} é inteiro: ${Number.isInteger(numero)}<br/>`;
texto.innerHTML += `É NaN: ${Number.isNaN(numero)}<br/>`;
texto.innerHTML += `Arredondado para baixo: ${Math.floor(numero)}<br/>`;
texto.innerHTML += `Arredondado para cima: ${Math.ceil(numero)}<br/>`;
texto.innerHTML += `Com duas casas decimais: ${numero.toFixed(2)}`;