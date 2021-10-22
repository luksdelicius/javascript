const nome = 'Rebeca'
const concatenacao = 'olá '+ nome+ '!'
const template = `
   Olá
   ${nome}!`//tudo dentro do dolar ele interpreta certo(soma,divide....)

   console.log(concatenacao,template)

   /* Template Strings são strings que permitem expressões embutidas.
   Você pode utilizar string multi-linhas e interpolação de string com elas.*/

   //expressoes...
   console.log(`1 +1 = ${1+1}`) //lembrando que + usa pra CONCATENAR) 


const up = texto =>texto.toUpperCase()// Função criada pra transformar em letras Maiusculas
console.log(`Ei... ${up('cuidado')}!`)

/* LEMBRANDO QUE O SINAL É o SINAL DA CRASE (``) e não ASPAS ('',"")*/