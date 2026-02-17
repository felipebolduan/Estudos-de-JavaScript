# Estudos em JavaScript

Nesse **README** organizarei os conhecimentos que venho adquirindo no curso do professor Otavio Miranda para que depois eu possa consulta-los para revisar os conteúdos e não esquecer detalhes importantes

## Variáveis com let (Aula 6)

*"Let"* é uma forma mais atual de declararmos uma variável, sendo assim é mais eficaz usa-la ao invés de var. Algumas regras que devemos nos atentar quanto a ela:

* Não podemos criar variáveis com nomes reservados;
* Variáveis precisam ter nomes significativos (Respeitando os principios do CleanCode);
* Não podemos iniciar uma variável com número;
* Não podemos colocar espaços e traços em variáveis;
* É importante usarmos camelCase para nomear nossas variáveis;
* As variáveis são Case-sensitive (Ou seja, letra maiúscula e minuscula fazem a diferença);
* Não podemos redeclarar variáveis com let.

## Constantes (Aula 7)

*"const"* é muito similar a uma vatiável, porém ela não muda de valor, como o próprio nome indica, ela é constante. Algumas regras para constantes:

* Não podemos criar constantes com nomes reservados;
* Constantes precisam ter nomes significativos (Respeitando os principios do CleanCode);
* Não podemos iniciar uma constante com número;
* Não podemos colocar espaços e traços em constantes;
* É importante usarmos camelCase para nomear nossas constantes;
* As variáveis são Case-sensitive (Ou seja, letra maiúscula e minuscula fazem a diferença);
* Não podemos modificar o valor de uma constante (Ela vai ser declarada e inicializada e seu valor permanecerá o mesmo durante toda a execução do programa);
* Não utilize VAR, utilize CONST.

Um comando importante aprendido é o **typeof**, ele nos demonstra qual é o tipo de uma determinada variável/constantes.

## Operadores aritméticos, de atribuição e incremento (Aula 11)

Operadores aritméticos: + (Soma ou concatenação), - (Subtração), * (Multiplicação), / (Divisão), ** (Potenciação), % (Resto da Divisão)

Operadores de incremento: ++ (Incremento), -- (Decremento). Muito usado em contadores (Ex.: contador++)

Operadores de atribuição: += (Soma e atribui), -= (Subtrai e atribui), *= (Multiplica e atribui), /= (Divide e atribui), **= (Potencia e atribui).

## Comandos de Navegadores

* `window.alert` é usado para exibir um alerta no navegador;
* `window.confirm` é utilizado para fazer uma confirmação (Ex.: Você deseja realmente excluir?) e sempre retornará um valor booleano;
* `window.prompt` traz um campo para que possa ser preenchido (Ex.: Digite a senha) e retorna um valor em String. 

## Strings Básico (Aulas 15 e 16)

Na aulas 15 e 16 tive uma ideia melhor sobre como funcionam as Strings e também de como encontrar valores e informações nela. Por exemplo conseguimos usar a função `index.of` para encontrar o indice de uma determinada função, a `toUpperCase` e `toLowerCase` para deixar uma string ou toda maiuscula ou toda minuscula.

## Numbers Básico (Aula 17)

Nessa aula exploramos um pouco mais a parte de numbers do JS, onde pudemos perceber que, em situações de números decimais não temos uma precisão absoluta, vimos também como fixar um número com determinadas casas decimais especificas e também como converter um número em Binário, Hexadecimal e afins.

## Math e Exercicios (Aula 18 e 19)

Nessas duas aulas vimos um pouco sobre a função Math e suas utilidades, básicamente essa função nos permite manipular questões matemáticas como arredondamento (Utilizando o `Math.floor()` para arredondar para baixo e o `Math.ceil()` para arredondar para cima), geração de número randomico, definição de uso de casas decimais e afins.

## Arrays Básico (Aula 20)

Nessa aula, que foi uma aula bem interessante, aprendi um pouco mais sobre o uso de arrays (listas), onde pude ver que o JS não limita um array a somente um tipo (Porém, por boas práticas, o ideal é limitarmos) e podemos fazer diversas coisas no array, como adicionar itens no inicio e final do array, consultar itens, remover itens do inicio do array e do final, calcular o seu tamanho e entre outros (Creio que esse conhecimento me será muito valioso em projetos futuros).

## Introdução a Funções (Aula 21)

Aqui aprendemos um básico sobre funções, no qual aprendi que uma função tem como objetivo criar um bloco de código que executa alguma ação. Essa função é protegida, ou seja, não consigo acessar o que está dentro dela por fora da função (Entendi também que posso reutilizar variáveis que eu crio dentro da função em outros trechos do código e em outras funções). Realmente uma das aulas mais interessantes até o momento.

## Introdução a Objetos (Aula 22)

Vimos nessa aula um pouco sobre objetos, onde entendi que quando tenho um padrão de coisas que quero declarar ou que preciso armazenar posso criar um objeto com os parametros necessários e então chamar esse objeto depois para inputar ou consultar valores, além disso vimos um pouco de funções dentro de objetos e como elas podem ser poderosas (Estou bem animado para quando chegarmos a parte de aprofundarmos esse conhecimento).