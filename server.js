const express = require('express')
const app = express()
const port = 3000

//Rota Principal
    app.get('/',(req, res)=>{
    res.send('Ola Mundo')
    })
app.get('/cadastro',(req, res)=>{
    res.send('Ola Cadastro')
})

app.listen(port, ()=>{
    console.log(`Servidor rodando na porta ${port}`)
})