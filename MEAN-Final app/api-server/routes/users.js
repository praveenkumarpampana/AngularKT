var express = require('express');
var router = express.Router();
var User = require('../models/User');
var jwt = require('jwt-simple');

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});


router.post('/register', function (req, resp) {
  var user = req.body;
  var newUser = new User({ email: user.email, password: user.password });
  var payload = {
    iss: req.hostname,
    sub: newUser.id
  };
  var token = jwt.encode(payload, "sh....");
  newUser.save(function (err, user) {
    resp.status(200).send({ user: user, token: token });
  });
});

router.post('/login', function (req, resp) {
  req.user = req.body;
  User.findOne({ email: req.user.email }, function (err, user) {
    if (err) throw err;

    if (!user)
      resp.status(401).send({ message: 'Wrong Email/Password' });

    user.comparePasswords(req.user.password, function (err, isMatch) {
      if (err) throw err;
      if (!isMatch)
        return resp.status(401).send({ message: 'Wrong Email/Password' });

      createAndSendToken(user, resp);
    });
  });
});


function createAndSendToken(user, resp) {
  var payload = {
    sub: user.id
  };
  var token = jwt.encode(payload, "sh....");
  resp.status(200).send({ user: user, token: token });
}


module.exports = router;
