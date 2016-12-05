var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');
var cors = require('cors');
var mongoose = require('mongoose');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var User = require('./models/User');
// var jwt = require('./services/jwt');
var jwt = require('jwt-simple');

// var index = require('./routes/index');
var users = require('./routes/users');
var products = require('./routes/products');

//-------------------------------------------------------------------------

mongoose.connect('mongodb://localhost/demo');

var app = express();
app.use(cors());

//-------------------------------------------------------------------------

app.use(passport.initialize());
passport.serializeUser(function(user, done) {
    done(null, user.id);
});

var loginStrategy = new LocalStrategy({
    usernameField: 'email',
}, function(email, password, done) {
    User.findOne({ email: email }, function(err, user) {
        if (err) return done(err);

        if (!user)
            return done(null, false, { message: 'Wrong Email/Password' });

        user.comparePasswords(password, function(err, isMatch) {
            if (err) return done(err);
            if (!isMatch)
                return done(null, false, { message: 'Wrong Email/Password' });

            return done(null, user);
        });
    });

});

passport.use(loginStrategy);

//-------------------------------------------------------------------------

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