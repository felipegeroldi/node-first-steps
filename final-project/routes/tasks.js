var express = require('express');
var router = express.Router();
var passport = require('passport');
var db = require('../db');
var isAuth = (req, res, next) => {
  if(!req.isAuthenticated()) {
      return res.redirect('/');
  }
  
  next();
};

router.get('/', (req, res, next) => {
  db('tasks').then((tasks) => {
    res.render('index', {
      tasks: tasks,
      isAuth: req.isAuthenticated()
    });
  }, next);
});

router.get('/add', isAuth, (req,res,next)=>{
  res.render('add',{
  isAuth: req.isAuthenticated()
  });
});


router.post('/add', isAuth, (req, res, next) => {
  db('tasks').insert(req.body).then((ids) => {
    res.redirect('/');
  }, next);
});

router.get('/edit/:id', isAuth, (req, res, next) => {
  const { id } = req.params;

  db('tasks')
    .where('id', id)
    .first()
    .then((task) => {
      if(!task) {
        return res.send(400);
      }

      res.render('edit', {
        task: task,
        isAuth: req.isAuthenticated()
      });
    }, next);
});

router.put('/edit/:id', isAuth, (req, res, next) => {
  const { id } = req.params;

  db('tasks')
    .where('id', id)
    .update(req.body)
    .then((result) => {
      if(result === 0) {
        return res.send(400);
      }

      res.redirect('/');
    }, next);
});

router.delete('/delete/:id', isAuth, (req, res, next) => {
  const { id } = req.params;

  console.log("deletando " + id);
  db('tasks')
    .where('id', id)
    .delete()
    .then((result) => {
      if (result === 0) {
        return res.send(400);
      }
      
      res.redirect('/');
    });
});

module.exports = router;
