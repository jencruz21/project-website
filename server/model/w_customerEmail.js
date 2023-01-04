const mongoose = require('mongoose');

// ce means CustomerEmail
const CustomerEmailSchema = new mongoose.Schema({
    ce_name: {
        type: String,
        required: true
    }, 
    ce_from: {
        type: String,
        required: true
    },
    ce_to: {
        type: String,
        required: true
    },
    ce_subject: {
        type: String,
        required: true
    }, 
    ce_text: {
        type: String,
        required: true
    }
}, 
{
    timestamps: true
});

const CustomerEmail = mongoose.model('CustomerEmail', CustomerEmailSchema);

module.exports = CustomerEmail;