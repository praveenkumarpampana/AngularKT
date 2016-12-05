var express = require('express');
var router = express.Router();
var User = require('../models/User');
var passport = require('passport');
var jwt = require('jwt-simple');


router.post('/register', function (req, resp) {

  var user = req.body;
  var newUser = new User({ email: user.email, password: user.password });

  var token = jwt.encode(payload, "sh....");
  newUser.save(function (err, user) {
    resp.status(200).send({ user: user });
  });

});

router.post('/login', passport.authenticate('local'), function (req, resp) {
  createAndSendToken(req.user, resp);
});


function createAndSendToken(user, resp) {
  var payload = {
    sub: user.id
  };
  var token = jwt.encode(payload, "sh....");
  resp.status(200).send({ user: user, token: token });
}


module.exports = router;
