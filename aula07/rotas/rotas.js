const express = require('express');
const router = express.Router();

let cursosInfo = [
    {
        'curso': 'node',
        'info': 'Curso de NODE'
    },
    {
        'curso': 'js',
        'info': 'Curso de js'
    },
    {
        'curso': 'HTML',
        'info': 'Curso de HTML'
    },
    {
        'curso': 'CSS',
        'info': 'Curso de CSS'
    },
    {
        'curso': 'Python',
        'info': 'Curso de Python'
    }
];

router.get('/',(req,res)=>{
    res.json({ola: 'Seja bem-vindo'});
});

router.get('/:cursoid',(req,res)=>{
    const curso = req.params.cursoid;
    let cursoI = cursosInfo.find(i=>i.curso == curso);
    if(!cursoI){
        res.status(404).json(
            {erro:'Curso não encontrado',cursoPesquisado:curso}
        )
    } else {
        res.status(200).json(cursoI)
    }
});

module.exports = router;