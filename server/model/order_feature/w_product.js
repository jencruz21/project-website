const mongoose = require('mongoose');

const ProductsSchema = new mongoose.Schema({
    p_product_name: {
        type: String,
        required: true
    },
    p_price: {
        type: Number,
        required: true
    },
    p_unit: {
        type: String,
        required: true
    },
    p_rice_category: {
        type: String,
        required: true
    }, 
    p_sales: {
        type: Number,
        required: true
    },
    p_image_path: {
        type: String,
        required: true
    },
    p_product_gallery: [{
        p_img_name: {
            type: String,
            required: true
        },
        p_img_path_name: {
            type: String,
            required: true
        }
    }]
}, { timestamps: true });

exports.Products = mongoose.model("products", ProductsSchema);