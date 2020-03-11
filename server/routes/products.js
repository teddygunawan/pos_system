var router = require('express').Router();
var ProductController = require('../controllers/productcontroller');
const { check } = require('express-validator');

/* TBD - Separate Validation */

router.get('/', ProductController.index);
router.post('/', [
    check('name').isLength({ min: 1 })
], ProductController.create);
router.get('/:id', ProductController.get)

module.exports = router;
