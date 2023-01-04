const mongoose = require('mongoose');

const InventorySchema = new mongoose.Schema({
    r_rice_name: {
        type: String,
        required: true,
        default: "Unknown Name"
    },
    r_per_kilo : {
        type: Number,
        required: true,
        default: 0
    },
    r_market_price : {
        type: Number,
        required: true,
        default: 0
    }, 
    r_ten_kaban : {
        type: Number,
        required: true,
        default: 0
    }, 
    r_whole_sale_market: {
        type: Number,
        required: true,
        default: 0
    },
    r_whole_sale_price: {
        type: Number,
        required: true,
        default: 0
    }, 
    r_special_price: {
        type: Number,
        required: true,
        default: 0
    }, 
    r_divert_price: {
        type: Number,
        required: true,
        default: 0
    },
    r_good_as_cash: {
        type: Number,
        required: true,
        default: 0
    }, 
    r_divert_salin_truck: {
        type: Number,
        required: true,
        default: 0
    },
    r_additional_less_id: {
        type: String,
        required: true,
        default: "Unknown ID"
    }
}, {
    timestamps: true
});

const Inventory = mongoose.model("Inventory", InventorySchema);

module.exports = Inventory;

