var express = require('express');
var crypto = require('crypto');
var router = express.Router();
require('../db');
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;