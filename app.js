var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var passport = require('passport'); // authentication
var session = require('express-session');
// we don't need to require bcrypt
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

// DELETED BOILERPLATE ROUTES, REPLACED WITH THESE
var api = require('./routes/api');
var authenticate = require('./routes/authenticate')(passport);
var mongoose = require('mongoose');

// connect to mongodb on default mongo port 27017
// THIS CONNECTION STRING SOMETIMES IN DATABASE.JS
mongoose.connect('mongodb://localhost:27017/chirp-test');
// INITIALIZE MODELS
// MODEL REQUIRE NEEDS HAPPEN BEFORE REQUIRE/INIT PASSPORT
require('./models/models.js');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
// app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

// APP.USE: FOR MIDDLEWARE AND MOUNTING ROUTES
// MIDDLEWARE STANDS BETWEEN CLIENT & OUR CODE
// IF THESE APPLY TO ROUTE WILL RUN IN ORDER HERE
app.use(logger('dev'));
app.use(session({
   secret: 'super secret'
}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(require('less-middleware')(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));
app.use(passport.initialize());
app.use(passport.session());
// INITIALIZE PASSPORT MODULE AND IT'S LIBRARY
var initPassport = require('./passport-init');
initPassport(passport); // call function with module required at top
// REGISTERED OUR ROUTERS & MOUNTED THEM
app.use('/api', api);
app.use('/auth', authenticate);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
