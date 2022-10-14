const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {

    const filmes = [
        {
            "title": "testando 1",
            "descricao": "Descrição sobre o filme.",
            "image": "a rebeliao.jpg"
        },
        {
            "title": "testando  2",
            "descricao": "Descrição sobre o filme.",
            "image": "a rebeliao.jpg"
        },
        {
            "title": "testando 3",
            "descricao": "Descrição sobre o filme.",
            "image": "a rebeliao.jpg"
        },
        {
            "title": "testando 4",
            "descricao": "Descrição sobre o filme.",
            "image": "a rebeliao.jpg"
        }
    ];

    const series_originais = [
        {
            "title": "testando 1",
            "descricao": "Descrição sobre as series.",
            "image": "cap hanna.jpg"
        },
        {
            "title": "testando  2",
            "descricao": "Descrição sobre o filme.",
            "image": "cap hanna.jpg"
        },
        {
            "title": "testando 3",
            "descricao": "Descrição sobre o filme.",
            "image": "cap hanna.jpg"
        },
        {
            "title": "testando 4",
            "descricao": "Descrição sobre o filme.",
            "image": "cap hanna.jpg"
        }
    ];

    const series_premiadas = [
        {
            "title": "testando 1",
            "descricao": "Descrição sobre as series.",
            "image": "series premiadas/dexter.jpg"
        }
    ];

    const slide = [
        {
            "title": "testando 1",
            "subtitle": "subtitulo",
            "desc": "Descrição sobre as series.",
            "img": "47.jpg"
        },
        {
            "title": "testando 1",
            "subtitle": "subtitulo",
            "desc": "Descrição sobre as series.",
            "img": "great.jpg"
        },
        {
            "title": "testando 1",
            "subtitle": "subtitulo",
            "desc": "Descrição sobre as series.",
            "img": "boys.jpg"
        },
    ];

    res.render('pages/index', {
        filmes: filmes,
        series_originais: series_originais,
        series_premiadas: series_premiadas,
        slides: slide,
    });
});

router.get('/series', (req, res) => {

    const series = [
        {
            "title": "testando series",
            "descricao": "Descrição sobre as series.",
            "image": "serie originais/cap hanna.jpg"
        },
        {
            "title": "testando series",
            "descricao": "Descrição sobre as series.",
            "image": "serie originais/cap hanna.jpg"
        },
        {
            "title": "testando series",
            "descricao": "Descrição sobre as series.",
            "image": "serie originais/cap hanna.jpg"
        },
        {
            "title": "testando series",
            "descricao": "Descrição sobre as series.",
            "image": "serie originais/cap hanna.jpg"
        }
    ];

    res.render('pages/series', {
        series: series,
    });
});

router.get('/filmes', (req, res) => {

    const melhores_filmes = [
        {
            "title": "testando melhores filmes",
            "descricao": "Descrição sobre os filmes.",
            "image": "melhores filmes/end gamers.jpg"
        },
        {
            "title": "testando melhores filmes",
            "descricao": "Descrição sobre os filmes.",
            "image": "melhores filmes/end gamers.jpg"
        },
        {
            "title": "testando melhores filmes",
            "descricao": "Descrição sobre os filmes.",
            "image": "melhores filmes/end gamers.jpg"
        },
        {
            "title": "testando melhores filmes",
            "descricao": "Descrição sobre os filmes.",
            "image": "melhores filmes/end gamers.jpg"
        },
    ];

    const filmes_recomendados = [
        {
            "title": "testando filmes recomendados",
            "descricao": "Descrição sobre os filmes recomendados.",
            "image": "filmes recomendados/countdown.jpg"
        },
        {
            "title": "testando filmes recomendados",
            "descricao": "Descrição sobre os filmes recomendados.",
            "image": "filmes recomendados/countdown.jpg"
        },
        {
            "title": "testando filmes recomendados",
            "descricao": "Descrição sobre os filmes recomendados.",
            "image": "filmes recomendados/countdown.jpg"
        },
        {
            "title": "testando filmes recomendados",
            "descricao": "Descrição sobre os filmes recomendados.",
            "image": "filmes recomendados/countdown.jpg"
        },
    ];

    res.render('pages/filmes', {
        melhores_filmes: melhores_filmes,
        filmes_recomendados: filmes_recomendados,
    });
});

router.get('/login', (req, res) => {
    res.render('pages/login');
});

router.get('/cadastrar', (req, res) => {
    res.render('pages/cadastrar');
});

module.exports = router;