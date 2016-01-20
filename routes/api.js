// IN THIS ROUTE...
// EXPRESS + "EXPRESS.ROUTER() CLASS" > MODULE AS "ROUTER" > + OUR CODE ADDITIONS > EXPORT TO APP
// THESE ARE CRUD ROUTES FOR CLIENT TO ACCESS HANDLER LOGIC AND INTERACT WITH DATA

var express = require('express');
var router = express.Router();


// API TO CREATE OR  GET (ALL) POSTS
// THEN WE ADD THE /POSTS 'API HANDLERS' 
// REG'D TO HTTP METHODS
// EXPRESS ROUTE REQUEST HANDLERS TAKE TWO FUNCTIONS:
// 1) request object from client
// 2) response object from server
router.route('/posts')

   // create new post
   .post(function(req, res){
      //temp
      res.send({message: 'TODO create a new post'});
   })
   // get all posts in db
   .get(function(req, res){
      //temp solution w no db
      res.send({message: 'TODO return all posts'});
   })


// API FOR ACTIONS ON INDIVIDUAL POST (modify, get, delete). EXPRESS SERVER KNOWS TO PARSE PATH PARAMETERS AS A VARIABLE
   router.route('/posts/:id')

       .put(function(req,res){
           return res.send({message:'TODO modify an existing post by using param ' + req.param.id});
       })

       .get(function(req,res){
           return res.send({message:'TODO get an existing post by using param ' + req.param.id});
       })

       .delete(function(req,res){
           return res.send({message:'TODO delete an existing post by using param ' + req.param.id})
       });

module.exports = router
