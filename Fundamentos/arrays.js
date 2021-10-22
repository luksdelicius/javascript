const valores = [7.7,8.9,6.3,9.2]// ([])*Colchetes = ARRAYS LITERAL nesse caso 4 posições  são heterogeneas ( entra qualquer tipo de função*)
console.log(valores[0], valores [3])
console.log(valores[4])//indicie 4 não existe porém da undefined


valores [4] = 10 //defini o indice 4 como 10
console.log(valores)

valores[10] = 10  // ao marcar o indice 10 ele lê que tem 5 espaços vazios
console.log(valores)

console.log(valores.length)//Essa propriedade retorna o número de unidades de código presentes na string. UTF-16    // aqui no caso 11

valores.push({id:3}, false, null, 'teste')//O método push() adiciona um ou mais elementos ao final de um array e retorna o novo comprimento desse array
console.log(valores)

console.log(valores.pop())//O método pop() remove o último elemento de um array e retorna aquele elemento.
delete valores [0]//pode se deletar assim também
console.log(valores)

console.log(typeof valores)// type of define o que é nesse caso é um objetvo.
