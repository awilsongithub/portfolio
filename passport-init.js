// BOILERPLATE PASSPORT INITIALIZATION CODE
// CREATES THE MIDDLEWARE AUTHENTICATION HANDLERS
// AND EXPORTS IT AS A MODULE
// PASSPORT HANDLES SESSIONS (TEMPORARY STORE OF USER LOGIN)
// "DONE" CALLBACK REQ'D BY PASSPORT ON EXIT POINTS
// SYNTAX KEY: false = not successful, null = no error


// MODULE 5 START CODE
var mongoose = require('mongoose');
var User = mongoose.model('User');
var LocalStrategy   = require('passport-local').Strategy;
var bCrypt = require('bcrypt-nodejs');

module.exports = function(passport){

	// Passport needs to be able to serialize and deserialize users to support persistent login sessions
	passport.serializeUser(function(user, done) {
		console.log('serializing user:',user.username);
		done(null, user._id);
	});

	passport.deserializeUser(function(id, done) {
		User.findById(id, function(err, user) {
			console.log('deserializing user:',user.username);
			done(err, user);
		});
	});

	passport.use('login', new LocalStrategy({
			passReqToCallback : true
		},
		function(req, username, password, done) {
			// check in mongo if a user with username exists or not
			User.findOne({ 'username' :  username },
				function(err, user) {
					// In case of any error, return using the done method
					if (err)
						return done(err);
					// Username does not exist, log the error and redirect back
					if (!user){
						console.log('User Not Found with username '+username);
						return done(null, false);
					}
					// User exists but wrong password, log the error
					if (!isValidPassword(user, password)){
						console.log('Invalid Password');
						return done(null, false); // redirect back to login page
					}
					// User and password both match, return user from done method
					// which will be treated like success
					return done(null, user);
				}
			);
		}
	));

	passport.use('signup', new LocalStrategy({
			passReqToCallback : true // allows us to pass back the entire request to the callback
		},
		function(req, username, password, done) {

			// find a user in mongo with provided username
			User.findOne({ 'username' :  username }, function(err, user) {
				// In case of any error, return using the done method
				if (err){
					console.log('Error in SignUp: '+err);
					return done(err);
				}
				// already exists
				if (user) {
					console.log('User already exists with username: '+username);
					return done(null, false);
				} else {
					// if there is no user, create the user
					var newUser = new User();

					// set the user's local credentials
					newUser.username = username;
					newUser.password = createHash(password);

					// save the user
					newUser.save(function(err) {
						if (err){
							console.log('Error in Saving user: '+err);
							throw err;
						}
						console.log(newUser.username + ' Registration succesful');
						return done(null, newUser);
					});
				}
			});
		})
	);

	var isValidPassword = function(user, password){
		return bCrypt.compareSync(password, user.password);
	};
	// Generates hash using bCrypt
	var createHash = function(password){
		return bCrypt.hashSync(password, bCrypt.genSaltSync(10), null);
	};

};



// MY OLD CODE COMMENTED OUT FRI JAN 22 12:30PM
// var LocalStrategy   = require('passport-local').Strategy;
// var bCrypt = require('bcrypt-nodejs');
// var mongoose = require('mongoose');
// var User = mongoose.model('User');
// var Post = mongoose.model('Post');
//
// module.exports = function(passport){
//
//     // Passport needs to be able to serialize and deserialize users to support persistent login sessions
//     passport.serializeUser(function(user, done) {
//       // tell passport id to use for user
//         console.log('serializing user:',user._id);
//         return done(null, user._id); // null  means no error
//     });
//
//     passport.deserializeUser(function(id, done) {
//       // return user object back
//          User.findById(id, function(err, user){
//             if(err){
//                return done(err, false);
//             }
//             if(!user){
//                return done('user not found', false);
//             }
//             // we found the user object, provide back to passport
//             return done(user, true);
//          });
//
//     });
//
//     // if pass both "if" conditions, can sign in.
//     passport.use('login', new LocalStrategy({
//             passReqToCallback : true
//         },
//         function(req, username, password, done) {
//            // fiind user then callback
//             User.findOne({username: username}, function(err, user){
//                if(err){
//                   return done(err, false);
//                }
//                // if no user with this username
//                if(!user){
//                   return done('user ' +username + ' not found', false);
//                }
//                if(!isValidPassword(user, password)){
//                   return done('incorrect password', false);
//                }
//                // if all ok, return null (=all ok), and user
//                return done(null, user);
//             });
//         }
//     ));
//
//
//
//     passport.use('signup', new LocalStrategy({
//             passReqToCallback : true // allows us to pass back the entire request to the callback
//         },
//
//         function(req, username, password, done) {
//
//           // findOne is a MongoDB convenience, we give it a username and callback
//            User.findOne({username: username}, function(err, user){
//
//              if(err){
//                 return done(err, false);
//              }
//              if(user){
//                 //we have already signed this user up
//                 return done('username already taken', false);
//              } else {
//              // use the user constructor
//              console.log('create new user');
//              var user = new User();
//
//              user.username = username;
//              user.password = createHash(password);
//              console.log('debug1');
//              user.save(function(err, user){
//                 if(err){
//                    return done(err, false);
//                 }
//                 console.log('successfully signed up user ' + username);
//                 return done(null, user);
//              });
//           }
//          });
//       }))
//
//     var isValidPassword = function(user, password){
//         return bCrypt.compareSync(password, user.password);
//     };
//     // Generates hash using bCrypt
//     var createHash = function(password){
//         return bCrypt.hashSync(password, bCrypt.genSaltSync(10), null);
//     };
// };
