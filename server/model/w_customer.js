const mongoose = require("mongoose")

const customerSchema = new mongoose.Schema({
    c_name:{
        type: String,
        require:true
    },
    c_date:{
        type: String,
        require:true
    },
    c_location:{
        type: String,
        require: true
    },
    c_cpNum:{
        type:String,
        require:true
    },
    c_caban:{
        type: String,
        require:true
    },
    c_price:{
        type: String,
        require:true
    },
    c_bal:{
        type: String,
        require: true
    },
})

const Customerdb = mongoose.model("customerdb",customerSchema);
module.exports = Customerdb;