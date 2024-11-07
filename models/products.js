// models/Product.js

import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
    },
    category: {
        type: String,
        enum: ['sports', 'food', 'style'], // Allowed categories
        required: true,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', // Reference the User model by name
        required: true,
    }
});

const Product = mongoose.model('Product', productSchema);

export default Product;
