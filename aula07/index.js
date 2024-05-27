const express = require('express');
const app = express();
//------------------------------
const rotas = require('./rotas/rotas.js');
const porta = process.env.PORT || 2024;

app.use('/',rotas);

app.get('*',(req,res)=>{
    res.send('CFB Cursos');
});

app.listen(2024,console.log('Servidor rodando...'));