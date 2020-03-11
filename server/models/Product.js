var mongoose = require('mongoose');
const productSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true,
    },
    category: {
        type: String,
        required: false
    },
    aliases: {
        type: String,
        required: false
    },
    price: {
        type: String,
        required: false
    }
});

productSchema.statics.findByName = async function (name) {
    let product = await this.findOne({
        name: name,
    });

    return product;
};

const Product = mongoose.model('Product', productSchema);

module.exports = Product;