let valor //não inicializada
console.log(valor)// undefined pois não atribui absolutamente nada
//console.log(valor2) is not defined , não declarou nada

valor = null //ausencia de valor,porém foi definada...
console.log(valor)

/* não é legal atribuir undefined,deixar ele ser no "automatico", sempre usar o nulo quando quiser zerar uma variavel*/
//console.log(valor.toString()) você não pode usar um tostring num valor nulo typerror**

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco=undefined//evitar isso sempre* nunca usar
console.log(!!produto.preco)
//delete produto.preco essa é a forma de tirar um atributo de um objeto, volta a ser um objeto vazio
console.log(produto)

produto.preco = null //sem preço
console.log(!!produto.preco)
console.log (produto)