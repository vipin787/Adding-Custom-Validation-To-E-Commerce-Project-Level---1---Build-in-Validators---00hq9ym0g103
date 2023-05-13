
/* Product Model */
const mongoose = require('mongoose');

/*
Add Custom Validation to Product Model
Validate that the product name is at least 3 characters long, the description is at least 10 characters long, and the price is a positive number.
Throw an error is the Validation fails.
*/
const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        //Add a Custom Validation Here
        minlength: 3,
    },
    description: {
        type: String,
        required: true,
        //Add a Custom Validation Here
        minlength: 10,
    },
    price: {
        type: Number,
        required: true,
        //Add a Custom Validation Here
        validate: {
      validator: function (value) {
        return value > 0;
      },
      message: 'Price should be a positive number',
    },
    },
    category: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
