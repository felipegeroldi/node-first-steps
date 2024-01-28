var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');

router.get('/', (req, res, next) => {
    mongoose.model('Musica').find().then((musicas) => {
        res.render('index', {
            musicas: musicas
        });
    }, next);
});

router.get('/add', (req, res, next) => {
    res.render('add');
});

router.post('/', (req, res, next) => {
    var Musica = mongoose.model('Musica');
    var m = new Musica(req.body);

    m.save().then((result) => {
        res.redirect('/');
    }, next);
});

router.get('/edit/:id', (req, res, next) => {
    const { id } = req.params;
    mongoose.model('Musica').findOne({_id: id}).then((musica) => {
        res.render('edit', { musica: musica });
    });
});

router.put('/edit/:id', (req, res, next) => {
    const { id } = req.params;

    mongoose.model('Musica').findOneAndUpdate({ _id: id },
        {
            nome: req.body.nome,
            artista: req.body.artista,
            estrelas: req.body.estrelas
        }
    ).then((musica) => {
        res.redirect('/');
    }, next);
});

router.delete('/delete/:id', (req, res, next) => {
    const { id } = req.params;

    mongoose.model('Musica').findOneAndDelete({ _id: id }).then((musica) => {
        res.redirect('/');
    });
});

module.exports = router;