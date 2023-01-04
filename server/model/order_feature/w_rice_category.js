const mongoose = require('mongoose');

const RiceCategorySchema = new mongoose.Schema({
    r_category_name: {
        type: String,
        required: true
    }
}, { timestamps: true });

exports.RiceCategory = mongoose.model("riceCategory", RiceCategorySchema);