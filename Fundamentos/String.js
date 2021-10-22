/* Strings = "", ''  String é um conjunto de caracteres alfanuméricos,
 em javascript qualquer conjunto entre aspas simples ou duplas é uma string,
 javascript é uma linguagem dinâmica,
 não tipamos a variável quando a declaramos, 
 então para a variável “nome” tornar-se uma string basta atribuir um valor entre aspas para ela.*/

const escola ="Cod3r"

console.log(escola.charAt(4))/*O charAt() método retorna o caractere no índice especificado em uma string. 
O índice do primeiro caracter é 0, o segundo carácter é 1, e assim por diante.*/
console.log(escola.charAt(5))// quando colocamos um caractere 
console.log(escola.charCodeAt(3))//Charcode (3) buscou o 3 da tabela unicode o codigo HTML
console.log(escola.indexOf(3))/*O método indexOf() retorna o primeiro índice em que o elemento pode ser encontrado no array,
 retorna -1 caso o mesmo não esteja presente.*/

console.log(escola.substring(1))/*O método substring() retorna a parte da string entre os
  índices inicial e final, ou até o final da string.*///imprime o cod3r porem do O para frente 
console.log(escola.substring(0,3))//inclui indice 0 ate o indicie 3 , sem incluir o item final

  console.log('Escola '.concat(escola).concat("1"))/*A função concat() combina o texto de duas ou mais strings e
   retorna uma nova string. As alterações de texto de uma string não afetam a outra string.*/
   console.log(escola.replace(3,'e'))/*O método replace() retorna uma nova string com algumas ou todas as
    correspondências de um padrão substituídas por um determinado caractere (ou caracteres)*/
console.log('ana,Maria,Pedro'.split(','))/*O método split() divide uma String em uma lista ordenada de substrings,
 coloca essas substrings em um array e retorna o array.*/
 