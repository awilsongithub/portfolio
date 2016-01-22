// ABOUT THESE AUTHENTICATE ROUTES:
// 1. these routes call authenticate "strategies" defined in
// passport-init (functions to check if user exists, etc, etc)
// 2. these pass back a user or false
// 3. and user is redirected accordingly
// 4. note: full paths needed in code blocks since those are static strings

var express = require('express');
var router = express.Router();

// EXPOSE THESE ROUTES TO GLOBAL SCOPE
// ROUTE SYNTAX: ROUTER + TYPE HTTP REQ + PARAMS = (/PATH, CALLBACK FUNCTION)
module.exports = function(passport){

   // send success  state > angular
   router.get('/success', function(req, res){
      res.send({state: 'success', user: req.user ? req.user: null});
   });

   // send faiilure state > angular
   router.get('/failure', function(req, res){
      res.send({state: 'failure', user: null, message: 'Invalid username or password'});
   });

   // login
   router.post('/login', passport.authenticate('login', {
      successRedirect: '/auth/success',
      failureRedirect: '/auth/failure'
   }));

   // sign up
   router.post('/signup', passport.authenticate('signup', {
      successRedirect: '/auth/success',
      failureRedirect: '/auth/failure'
   }));

   // logout
   router.get('/signout', function(req, res){
      req.logout();
      res.redirect('/');
   });

   return router;

}
