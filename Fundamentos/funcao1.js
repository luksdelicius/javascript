//funçao sem retorno
function Imprimirsoma(a, b){
    console.log(a+b)
}

Imprimirsoma(2,3)
Imprimirsoma(2)//not a number pois a variavel b não foi definida
Imprimirsoma(2,3,4,5,6,7,8,9,10)//ignora as variaveis não definidas
Imprimirsoma()//not a number pois nenhuma variavel foi encontrada

//função com retorno
function soma(a,b=1){
    return a +b

}

console.log(soma(2,3))
console.log(soma(2))
console.log(soma())//not a number pois a variavel A não foi definida