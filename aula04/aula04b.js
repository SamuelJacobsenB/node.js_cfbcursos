const express = require('express');
const app = express();
const porta = process.env.PORT;

app.get('/',(req,res)=>{
    res.send('CFB Cursos');
});

app.listen(porta || 2024,()=>{console.log('Servidor Rodando')});