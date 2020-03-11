var router = require('express').Router();
var createError = require('http-errors');
var users = require('./users')
var products = require('./products')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json({
    "res": "nice!"
  })
});

/* APIs */
router.use('/users', users)
router.use('/products', products)

module.exports = router;
