var router = require('express').Router();
var User = require('../models/user');
const { check } = require('express-validator');

/* TBD - Separate Validation */

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
