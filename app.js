const { Sequelize } = require('sequelize')
const express = require('express');
const app = express();
const port = process.env.PORT








//Arquivos staticos
app.use('/static', express.static(__dirname + '/public'))   

//rotas
app.get('/', (req, res) => {
    res.send('Ola mundo')
})

app.listen(port, () => {
    console.log(`O servidor esta rodando na porta ${ port }`)
})




