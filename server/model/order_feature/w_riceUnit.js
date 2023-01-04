const mongoose = require('mongoose');

const RiceUnitSchema = new mongoose.Schema({
    ru_unit: {
        type: String,
        required: true
    }
});

exports.RiceUnit = mongoose.model("riceUnit", RiceUnitSchema);