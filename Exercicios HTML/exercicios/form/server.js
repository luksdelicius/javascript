const express = require('express')
const app = express()
const bodyParser = require ('body-parser')

app.use(bodyParser.urlencoded({extended: true}))

app.post('/usuarios', (req,resp)=>{
console.log(req.body)
resp.send('<h1>PARABÉNS, Usuário Incluido !</h1>')

})

app.post('/usuarios/:id', (req,resp)=>{
    console.log(req.body)
    console.log(req.params.id)
    resp.send('<h1>PARABÉNS, Usuário Alterado !</h1>')
    
    })

app.listen(3030)

// npm i --save express@4.16.3 body-parser@1.18.2 -E inicia o server
// não esquecer  de rodar node server.js