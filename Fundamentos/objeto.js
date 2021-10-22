//objeto é diferente de json
// criar objetos de javascript literal

const prod1 = {}//par de chaves representa objeto *literalmente
prod1.nome = 'Celular Ultra Mega'//atribuiu valores de forma dinamica
prod1.preco = 4998.90
prod1[' Desconto Legal'] = 0.40 //procurar não usar espaço

console.log(prod1)

const prod2 = {// anotação literal
    nome: 'Camisa Polo',// não esquecer as virgulas 
    preco: 79.90 
    obj : {}// posso ter varios objetos, dentro de outro objeto
}
console.log(prod2)

'{"nome": "Camisa Polo", "preco" : 79.80}' //json

/* json não é a mesma coisa de objeto, json é um formato textual*/
/*objeto é uma coleção de chaves e valores , eles se parecem*/

