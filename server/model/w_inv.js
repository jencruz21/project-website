const mongoose = require('mongoose')


const invSchema = new mongoose.Schema({
    i_item:{
        type: String,
        require:true
    },
    i_type: {
        type: String,
        require: true
    },
    i_quantity:{
        type: String,
        require: true
    },
    i_retail:{
        type: String,
        require:true
    },
   
    i_5kg:{
        type: String,
        require: true
    },
    i_10kg:{
        type: String,
        require: true
    },
    i_market:{
        type: String,
        require: true
    },
    i_tenC:{
        type: String,
        require: true
    },
    i_ws1: {
        type: String,
        require:true
    },
    i_ws2:{
        type: String,
        require: true
    },
    i_sp1:{
        type: String,
        require: true
    },
    i_sp2:{
        type: String,
        require: true
    },
    i_divert:{
        type: String,
        require:true
    },
    i_capital:{
        type:String,
        require:true
    },
    i_roc:{
        type: String,
        require: true
    },
})

const Invdb = mongoose.model("invdb",invSchema)
module.exports = Invdb