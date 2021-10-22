// sempre usar (!!) Pra saber se é verdadeiro ou falso    !! = Verdadeiro ou falso?

let isAtivo = false
console.log(isAtivo)

isAtivo= true
console.log(isAtivo)

isAtivo = 1 
console.log(!!isAtivo)// colocou duas negações e se tornou verdadeiro (!!) nesse caso é verdade que não não isAtivo (1 é verdadeiro)
console.log(!isAtivo)//Nesse caso inverteu a logica então será falsa.
console.log(!!true)// naão não true é verdadeiro 
console.log(!true)// não é verdade .... se não é verdade é falso
console.log(!!false)//não não falso é falso
console.log(!false)// se não é falso é verdadeiro


console.log('os verdadeiros...')
console.log(!!3)
console.log(!!-1)
console.log(!!' ')//ou algum texto
console.log(!![])//array verdadeiro
console.log(!!{})//objeto literal verdadeiro
console.log(!!Infinity)
console.log(!!(Isativo = true))

//TODOS ESSES CASOS SE RESOLVEM COMO VERDADEIROS NO JS

console.log('Os Falsos')

console.log(!!0)
console.log(!!'')//sem texto é falso *string vazia
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo=false))

console.log('PRA FINALIZAR')

console.log(!!(''||null||0|| ' '))//  (||) sinal de OU// UM DESSES é VERDADEIRO e o resultado é verdadeiro
console.log(''||null||0||"epa"|| 'bora')// só encontra o primeiro verdadeiro

// javascript usa a maioria das vezes assim, usando o OU (||)

let nome ='LUcas'
console.log(nome||'desconhecido')// operação usada sempre em javascript (||) muito comum
