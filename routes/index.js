var express = require('express');
var router = express.Router();

// GET HOME PAGE
// AND RENDER INDEX VIEW
router.get('/', function(req, res, next){
   res.render('index', {title: "Chirp"});
});

module.exports = router;
