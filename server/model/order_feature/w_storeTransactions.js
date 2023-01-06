const mongoose = require("mongoose");
const StoreTransactItemsSchema = require("w_storeTransactItems");

const StoreTransactionsSchema = new mongoose.Schema({
    st_transaction_id: {
        type: String,
        required: true
    },
    st_user_id: {
        type: String,
        required: true
    },
    st_payment_method: {
        type: String,
        required: true
    }, 
    st_amount_paid: {
        type: Number,
        required: true
    },
    st_grand_total: {
        type: Number,
        required: true
    },
    st_expected_date: {
        type: Date,
        required: true
    },
    st_is_received: {
        type: Boolean,
        required: true
    },
    st_transaction_items: [StoreTransactItemsSchema]
}, {
    timestamps: true
});

exports.StoreTransactions = mongoose.model("StoreTransactions", StoreTransactionsSchema);