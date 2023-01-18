const mongoose = require("mongoose");

exports.StoreTransactItemsSchema = new mongoose.Schema({
    sti_cart_item_name: {
        type: String,
        required: true,
        trim: true
    },
    sti_qty: {
        type: Number,
        required: true
    },
    sti_price: {
        type: Number,
        required: true
    },
    sti_rice_category: {
        type: String,
        required: true
    },
    sti_unit: {
        type: String,
        required: true
    },
    sti_user_id: {
        type: String,
        required: true
    },
    sti_image_path: {
        type: String,
        required: true
    }
}, { timestamps: true });

module.exports = mongoose.model("storeTransactItems", StoreTransactItemsSchema);