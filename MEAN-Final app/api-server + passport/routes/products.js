var express = require('express');
var router = express.Router();
var jwt = require('jwt-simple');


var products = [{ name: 'Laptop', price: 12000 }, { name: 'Mobile', price: 2000 }];
router.get('/', function (req, resp) {

    console.dir(req.headers);

    if (!req.headers.authorization) {
        return resp.status(401).send({ message: 'Your are not authorized' });
    }

    var token = req.headers.authorization.split(' ')[1];
    var payload = jwt.decode(token, "sh....");

    console.log("sub" + payload.sub);
    if (!payload.sub) {
        return resp.status(401).send({ message: 'Your are not authorized' });
    }

    resp.send(products);
});

module.exports = router;
