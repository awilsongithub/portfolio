// BOILERPLATE PASSPORT INITIALIZATION CODE
// CREATES THE MIDDLEWARE AUTHENTICATION HANDLERS
// AND EXPORTS IT AS A MODULE
// PASSPORT HANDLES SESSIONS (TEMPORARY STORE OF USER LOGIN)
// "DONE" CALLBACK REQ'D BY PASSPORT ON EXIT POINTS
// SYNTAX KEY: false = not successful, null = no error

var LocalStrategy   = require('passport-local').Strategy;
var bCrypt = require('bcrypt-nodejs');
var mongoose = require('mongoose');
var User = mongoose.model('User');
var Post = mongoose.model('Post');

module.exports = function(passport){

    // Passport needs to be able to serialize and deserialize users to support persistent login sessions
    passport.serializeUser(function(user, done) {
      // tell passport id to use for user
        console.log('serializing user:',user._id);
        return done(null, user._id); // null  means no error
    });

    passport.deserializeUser(function(id, done) {
      // return user object back
         User.findById(id, function(err, user){
            if(err){
               return done(err, false);
            }
            if(!user){
               return done('user not found', false);
            }
            // we found the user object, provide back to passport
            return done(user, true);
         });

    });

    // if pass both "if" conditions, can sign in.
    passport.use('login', new LocalStrategy({
            passReqToCallback : true
        },
        function(req, username, password, done) {
           // fiind user then callback
            User.findOne({username: username}, function(err, user){
               if(err){
                  return done(err, false);
               }
               // if no user with this username
               if(!user){
                  return done('user ' +username + ' not found', false);
               }
               if(!isValidPassword(user, password)){
                  return done('incorrect password', false);
               }
               // if all ok, return null (=all ok), and user
               return done(null, user);
            });
        }
    ));



    passport.use('signup', new LocalStrategy({
            passReqToCallback : true // allows us to pass back the entire request to the callback
        },

        function(req, username, password, done) {

          // findOne is a MongoDB convenience, we give it a username and callback
           User.findOne({username: username}, function(err, user){

             if(err){
                return done(err, false);
             }
             if(user){
                //we have already signed this user up
                return done('username already taken', false);
             } else {
             // use the user constructor
             console.log('create new user');
             var user = new User();

             user.username = username;
             user.password = createHash(password);
             console.log('debug1');
             user.save(function(err, user){
                if(err){
                   return done(err, false);
                }
                console.log('successfully signed up user ' + username);
                return done(null, user);
             });
          }

         });
      }))








    var isValidPassword = function(user, password){
        return bCrypt.compareSync(password, user.password);
    };
    // Generates hash using bCrypt
    var createHash = function(password){
        return bCrypt.hashSync(password, bCrypt.genSaltSync(10), null);
    };

};
