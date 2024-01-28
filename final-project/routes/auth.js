var express = require('express');
var router = express.Router();
var passport = require('passport');
var db = require('../db');

var isNotAuth = (req, res, next) => {
  if (req.isAuthenticated()) {
      return res.redirect('/');
  }

  next();
};

router.get('/login', isNotAuth, (req, res, next) => {
  res.render('login');
}, isNotAuth);

router.post('/login', passport.authenticate('local',{
  successRedirect: '/',
  failureRedirect: '/error',
}));

router.get('/logout', (req, res, next) => {
  req.session.destroy();
  res.redirect('/');
});

router.get('/register', isNotAuth, (req, res, next) => {
  res.render('register');
});

router.post('/register', isNotAuth, (req, res, next) => {
  db('users').insert(req.body).then((ids) => {
    passport.authenticate('local')(req, res, () => {
      res.redirect('/');
    });
  }, next);
});

module.exports = router;