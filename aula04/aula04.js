const http = require('http');
const porta = process.env.PORT;

const servidor = http.createServer((req,res)=>{
    res.statusCode = 200;
    res.writeHead(200,{'Content-Type':'text-plain'});
    res.end('CFB cursos')
});

servidor.listen(porta || 2024,()=>{console.log('Servidor rodando...')});