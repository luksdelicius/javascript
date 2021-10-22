const peso1 = 1.0
const peso2 = Number('2.0')

console.log(peso1, peso2)
console.log(Number.isInteger(peso1))  //isinteger verdadeiro ou falso pois o número 1.0 entende que é inteiro, logo é verdadeiro.
console.log(Number.isInteger(peso2))

const avaliacao1 = 9.871
const avaliacao2 = 6.871

const total = avaliacao1*peso1+avaliacao2*peso2
const media =total/(peso1+peso2)

console.log(media)
console.log(media.toFixed(2))//tofixed (...) quantas casas decimais você quer 1,2,3,4,5 so colocar no parentes.
console.log(media.toString(2))// toString(2) transforma em numeros binarios
console.log(typeof media) /* o typeof é o operador unario colocado antes do seu operando o qual pode ser de qualquer tipo 
numeros,strings,booleana, indefinido , objetos e funções.*/
console.log(typeof Number)



