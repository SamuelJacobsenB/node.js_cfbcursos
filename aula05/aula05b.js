const http = require('http');
const fs = require('fs');
const porta = process.env.PORT;

const server = http.createServer((req,res)=>{
    fs.appendFile('teste.txt','Curso de Node - estudando NODE',(err)=>{
        if(err){throw err};
        console.log('Arquivo Criado');
    });
});

server.listen(porta || 2024,()=>{console.log('Servidor rodando...')});