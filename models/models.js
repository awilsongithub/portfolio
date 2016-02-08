// CAN HAVE MODEL FILE FOR EACH COLLECTION
// OR PUT BOTH IN ONE FILE

var mongoose = require('mongoose');

// CREATE SCHEMA SPECIFYING KEYS, DATA TYPES, DEFAULTS
// var postSchema = new mongoose.Schema({
//    text: String,
//    created_by: String,
//    created_at: {type: Date, default: Date.now}
// });

// NEW W TEXT2
// var postSchema = new mongoose.Schema({
//    text: String,
//    text2: String,
//    created_by: String,
//    created_at: {type: Date, default: Date.now}
// });

// NEW WITH ALL THE FIELDS
var postSchema = new mongoose.Schema({
   project: String,  // project title or site
   displayOrder: Number, // in cards on main
   description: String, // comment out
   tags: [String],  // technologies, skills
   siteLink: String, // live site
   cardImage: String,  // small 3 column preview image
   cardCaption: String,  // USE THIS for 1 line caption
   image1: String, // for details page 2 column large cards with captions
   image1Caption: String, // " "
   image2: String, // " "
   image2Caption: String, // " "
   image3: String,  // comment out
   image3Caption: String, // comment out
   image4: String, // comment out
   image4Caption: String, // comment out
   description1: String, // form plholder: "problem, action, solution paragraph"
   description2: String, // form plholder "technical approach paragraph'
   testimonial: String, // testimonial quotation
   created_by: String, // based on session
   created_at: {type: Date, default: Date.now}
});



var userSchema = new mongoose.Schema({
   username: String,
   password: String, // hash made from password
   created_at: {type: Date, default: Date.now}
});

// DECLARE A MODEL CALLED ____ WITH SCHEMA ______
module.exports.User = mongoose.model('User', userSchema);
module.exports.Post = mongoose.model('Post', postSchema);

/////////////////////////////////////
//  new postSchema for portfolio   //
/////////////////////////////////////

// var postSchema = new mongoose.Schema({
// Project: String,
// Description: String,
// Tags: [String],
// SiteLink: String,
// CardImage: String,
// CardCaption: String,
// Image1: String,
// Image1Caption: String,
// Image2: String,
// Image2Caption: String,
// Image3: String,
// Image3Caption: String,
// Image4: String,
// Image4Caption: String,
// Description1: String,
// Description2: String,
// Testimonial: String,
// created_by: String,
// created_at: {type: Date, default: Date.now}
// });
