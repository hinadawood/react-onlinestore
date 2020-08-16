var express = require('express');
var router = express.Router();
const {getCatalog} = require('../controllers/catalogController.js')

router.get('/catalog', (req, res, next) => {
  res.send(getCatalog());
  //res.sendStatus(401);
})

router.get('/test-unauthorized', (req, res, next) => {
  res.sendStatus(401);
})

module.exports = router
