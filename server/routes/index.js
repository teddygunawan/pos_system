var router = require('express').Router();
var users = require('./users')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json({
    "res": "nice!"
  })
});

/* Users API */
router.use('/users', users)

/* Some other API */

module.exports = router;
