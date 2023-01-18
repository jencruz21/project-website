const mongoose = require('mongoose');

const RiceUnitSchema = new mongoose.Schema({
    ru_unit: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model("riceUnit", RiceUnitSchema);