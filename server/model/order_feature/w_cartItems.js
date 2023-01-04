const mongoose = require('mongoose');

const CartItemsSchema = new mongoose.Schema({
    ci_cart_item_name: {
        type: String,
        required: true,
        trim: true
    },
    ci_qty: {
        type: Number,
        required: true
    },
    ci_price: {
        type: Number,
        required: true
    },
    ci_rice_category: {
        type: String,
        required: true
    },
    ci_unit: {
        type: String,
        required: true
    },
    ci_user_id: {
        type: String,
        required: true
    },
    ci_image_path: {
        type: String,
        required: true
    }
}, { timestamps: true });

exports.CartItem = mongoose.model("cartItems", CartItemsSchema);