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
   project: String,
   displayOrder: Number,
   description: String,
   tags: [String],
   siteLink: String,
   cardImage: String,
   cardCaption: String,
   image1: String,
   image1Caption: String,
   image2: String,
   image2Caption: String,
   image3: String,
   image3Caption: String,
   image4: String,
   image4Caption: String,
   description1: String,
   description2: String,
   testimonial: String,
   created_by: String,
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
