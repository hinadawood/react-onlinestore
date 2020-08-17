var express = require('express');
var router = express.Router();
const {authenticate} = require('../controllers/loginController.js')

router.post('/login', (req, res, next) => {
  var loggedIn = authenticate(req.body.username, req.body.password);
  if (loggedIn == 'Success'){
    res.send({accessToken: 'yourjwttoken'});
  } else {
    res.sendStatus(401);
  } 
})

module.exports = router
