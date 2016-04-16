// IN THIS ROUTE...////////////////////////////////////////
// EXPRESS + "EXPRESS.ROUTER() CLASS" > MODULE AS "ROUTER"
// ... > + OUR CODE ADDITIONS > EXPORT TO APP
// CRUD ROUTES FOR CLIENT > HANDLER LOGIC > INTERACT WITH DATA

var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Post = require('../models/models').Post;

// AUTHENTICATION
// LOCK UP POST ROUTES BUT NOT GETS
// THIS IS .USE MIDDLEWARE = FUNCTION THAT HAS ACCESS TO REQ, RES, NEXT OBJECTS.
// NEXT CALLS NEXT MIDDLEWARE IN LINE BETWEEN ME AND REQUEST HANDLER.
function isAuthenticated (req, res, next) {
      if(req.method ==='GET'){
         // continue to next middlewaree or req handler
         return next();
      }
      if(req.isAuthenticated()){
         // user authenticated, > next mware or req handler
         return next();
      }
      // else redirect back to /login
      return res.redirect('/#login'); // why #???
   };

// REGISTER ABOVE AUTHENTICATION MIDDLEWARE
router.use('/posts', isAuthenticated);

// API TO CREATE OR  GET (ALL) POSTS
// THEN WE ADD THE /POSTS 'API HANDLERS'
// REG'D TO HTTP METHODS
// EXPRESS ROUTE REQUEST HANDLERS TAKE TWO FUNCTIONS:
// 1) request object from client
// 2) response object from server
router.route('/posts')

   // CREATE? NEW POST ? OR DOES .POST IN MAINCONTROLLER DO IT?
   // OR DOES ONE > ANGULAR MODEL, OTHER > DB?
   .post(function(req, res){
      console.log(req);
      //temp removed: res.send({message: 'TODO create a new post'});
      // req.params
      var post = {}; // post document creation with param DATA

      // NEW ALL FIELDS
      post.project = req.body.project;
      post.displayOrder = parseInt(req.body.displayOrder);
      post.description = req.body.description;
      post.tags = req.body.tags;
      post.siteLink = req.body.siteLink;
      post.cardImage = req.body.cardImage;
      post.cardCaption = req.body.cardCaption;
      post.image1 = req.body.image1;
      post.image1Caption = req.body.image1Caption;
      post.image2 = req.body.image2;
      post.image2Caption = req.body.image2Caption;
      post.image3 = req.body.image3;
      post.image3Caption = req.body.image3Caption;
      post.image4 = req.body.image4;
      post.image4Caption = req.body.image4Caption;
      post.description1 = req.body.description1;
      post.description2 = req.body.description2;
      post.testimonial = req.body.testimonial;

      // THIS COMES FROM SESSION
      post.created_by = req.body.created_by;

      // DID REQ PARAMS GET THIS FAR ? no it didnt'.
      //console.log(req);
      // test if form calls this OR MAINCONTROLLER function?
      console.log('posted to route');

      Post.create(post, function(err, post) { // saving to db here
         if (err) {
            console.log(err);
            //return res.send(500, err);
         }
         return res.json(post);
      });
      //post.save();
   })

   // GET ALL POSTS
   .get(function(req, res){
      // temp solution w no db removed: res.send({message: 'TODO return all posts'});
      // FIND AND RETURN POSTS UNLESS ERROR
      console.log('debug1');
      Post.find(function(err, posts){
         console.log('debug2');
         if (err) {
            return res.send(500, err);
         }
         return res.send(200, posts);
      });
   });


// ACTIONS ON INDIVIDUAL POSTS
// EXPRESS SERVER KNOWS TO PARSE PATH PARAMETERS AS VARS
   router.route('/posts/:id')

      // FIND BY ID IN PARAMS THEN FUNCTION RESPONDS WITH POST JSON
      .get(function(req,res){
         Post.findById(req.params.id, function(err, post){
            if (err){
               res.send(err);
            }
            res.json(post);
         });
      })

      // FIND BY ID THEN MODIFY POST
      .put(function(req,res){
         // temp: return res.send({message:'TODO modify post ' + req.param.id});
         Post.findById(req.params.id, function(err, post){
            if (err){
               res.send(err);
            }

            // NEW ALL FIELDS
            post.project = req.body.project;
            post.displayOrder = parseInt(req.body.displayOrder);
            post.description = req.body.description;
            post.tags = req.body.tags;
            post.siteLink = req.body.siteLink;
            post.cardImage = req.body.cardImage;
            post.cardCaption = req.body.cardCaption;
            post.image1 = req.body.image1;
            post.image1Caption = req.body.image1Caption;
            post.image2 = req.body.image2;
            post.image2Caption = req.body.image2Caption;
            post.image3 = req.body.image3;
            post.image3Caption = req.body.image3Caption;
            post.image4 = req.body.image4;
            post.image4Caption = req.body.image4Caption;
            post.description1 = req.body.description1;
            post.description2 = req.body.description2;
            post.testimonial = req.body.testimonial;

            // THIS COMES FROM SESSION
            post.created_by = req.body.created_by;

            post.save(function(err, post){
               if (err){
                  res.send(err);
               }
               res.json(post);
            });
         });
      })


      // DELETE POST WITH ID IN REQ.PARAMS
      .delete(function(req,res){
         // temp: return res.send({message:'TODO delete post of id: ' + req.param.id})
         Post.remove({
            _id: req.params.id
         }, function(err) {
            if (err)
               res.send(err);
            res.json("deleted: (");
         });
      });

// EXPOSE ROUTER TO GLOBAL SCOPE
module.exports = router
