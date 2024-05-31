const http = require('http');
const porta = process.env.PORT || 2024;
const formidavel = require('formidable');
const fs = require('fs');

const servidor = http.createServer((req,res)=>{
    if(req.url == '/envioDeArquivo'){
        const form = new formidavel.IncomingForm();
        form.parse(req,(erro,campos,arquivos)=>{
            const urlantiga = arquivos.filetoupload.path
            const urlnova = 'C:/Users/Bruno/' + arquivos.filetoupload.name
            fs.rename(urlantiga,urlnova,(erro)=>{
                if (erro) throw erro
                res.write('Arquivo movido!');
                res.end();
            });
        });
    } else {
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write('<form action="envioDeArquivo" method="post">');
        res.write('<input type="file" name="filetoupload"><br>');
        res.write('<input type="submit" value="Enviar">');
        res.write('</form>');
        return res.end();
    };
});

servidor.listen(porta);