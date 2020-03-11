var Product = require('../models/product');
var createError = require('http-errors');
const { validationResult } = require('express-validator');
module.exports = {
    index(req, res, next) {
        Product.find({})
            .then(products =>
                res.status(200).json(products)
            )
            .catch(error =>
                next(createError(404, error))
            )
    },
    get(req, res, next) {
        let id = req.params.id
        Product.findById(id)
            .then(product =>
                res.status(200).json(product)
            )
            .catch(error =>
                next(createError(404, 'Not Found!'))
            )
    },
    create(req, res, next) {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          return res.status(422).json({ errors: errors.array() });
        }
      
        Product.create({ userName: req.body.userName })
            .then(product => res.status(200).json({"message" : "success!"}))
            .catch(error => next(createError(404, 'Something happend')))
    },
    update(req, res, next) {

    },
    delete(req, res, next) {

    }
}