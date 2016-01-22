// CAN HAVE MODEL FILE FOR EACH COLLECTION
// OR PUT BOTH IN ONE FILE

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// CREATE SCHEMA SPECIFYING KEYS, DATA TYPES, DEFAULTS
var postSchema = new mongoose.Schema({
   text: String,
   username: String, // pointing to user id
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
