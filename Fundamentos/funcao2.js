//armazenando uma funao em uma variavel
const imprimirsoma = function (a, b){
    console.log(a+b)
}
imprimirsoma (2,3)

//armazenando uma funcao arrow em uma variavel
const soma = (a, b ) => {// => função em arrow
    return a + b

}
console.log(soma(2,3))

//retorno implicito
const subtracao = (a,b) => a - b // le o codigo em apenas uma linha *arrow function
console.log(subtracao(2,3))//2 parametros

const imprimir2 = a => console.log(a)
imprimir2('legal !!!')