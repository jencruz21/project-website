const mongoose = require('mongoose')

const customerHisSchema = new mongoose.Schema({

    ch_name:{
        type: String,
        require: true
    },
    //create record CTR
    ch_dateCTR:{
        type: String,
        require: true
    },
    ch_date:{
        type: String,
        require: true
    },
    ch_time:{
        type: String,
        require: true
    },
    ch_prevRem:{
        type: String,
        require: true
    },
    ch_prevBal:{
        type: String,
        require: true
    },
    ch_newRem:{
        type: String,
        require:true
    },
    ch_st:{
        type: String,
        require: true
    },
    ch_rem:{
        type: String,
        require: true
    }

})

const CustomerHisdb = mongoose.model("custumerHisdb", customerHisSchema)
module.exports = CustomerHisdb;