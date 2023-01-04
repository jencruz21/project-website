const mongoose = require('mongoose');
const validator = require('validator');

const StoreUserSchema = new mongoose.Schema({
    su_first_name: {
        type: String,
        trim: true,
        required: true
    },
    su_last_name: {
        type: String,
        trim: true,
        required: true
    },
    su_address_1: {
        type: String,
        trim: true,
        required: true
    },
    su_address_2: {
        type: String,
        trim: true,
    },
    su_email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        validate: [validator.isEmail, "Please Enter Correct Email"]
    },
    su_password: {
        type: String,
        required: true,
        minLength: 8,
        trim: true
    },
    su_mobile_no: {
        type: Number,
        required: true,
        match: ["^(09|\+639)\d{9}$", "Invalid Phone Number"]
    },
    su_city: {
        type: String,
        required: true
    },
    su_zip_code: {
        type: Number,
        required: true,
        max: 9999,
        min: 700
    },
    su_country: {
        type: String,
        required: true,
        default: "Philippines"
    }
});

exports.StoreUser = mongoose.model("storeUser", StoreUserSchema);