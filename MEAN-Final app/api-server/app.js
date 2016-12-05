var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');
var cors = require('cors');
var mongoose = require('mongoose');
var User = require('./models/User');
// var jwt = require('./services/jwt');
var jwt = require('jwt-simple');

//-------------------------------------------------------------------------

mongoose.connect('mongodb://localhost/demo');

// var index = require('./routes/index');
var users = require('./routes/users');
var products = require('./routes/products');

var app = express();

app.use(cors());

//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public/app')));


//-------------------------------------------------------------------

app.use('/users', users);
app.use('/products', products);

//-------------------------------------------------------------------


// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handler
app.use(function(err, req, res, next) {
    
    // set locals, only providing error in development
    // res.locals.message = err.message;
    // res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    //res.status(err.status || 500).send(err.message);
    //res.render('error');

    console.dir(err);    

});

module.exports = app;

//--------------------------------------------------------------