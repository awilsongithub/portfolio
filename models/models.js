// CAN HAVE MODEL FILE FOR EACH COLLECTION
// OR PUT BOTH IN ONE FILE

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// CREATE SCHEMA SPECIFYING KEYS, DATA TYPES, DEFAULTS
var postSchema = new mongoose.Schema({
   text: String,
   created_by: String, // mod5 starts syas: should be changed to ObjectId, ref "User"
   created_at: {type: Date, default: Date.now}
});

var userSchema = new mongoose.Schema({
   username: String,
   password: String, // hash made from password
   created_at: {type: Date, default: Date.now}
});

// DECLARE A MODEL CALLED ____ WITH SCHEMA ______
mongoose.model('User', userSchema);
mongoose.model('Post', postSchema);
