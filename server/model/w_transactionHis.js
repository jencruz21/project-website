const mongoose = require('mongoose')


const transHisSchema = new mongoose.Schema({
             
            th_dateCTR:{
                type: String,
                require:true
            },
            th_date:{
                type: String,
                require:true
            },
            th_time:{
                type: String,
                require:true
            },
            th_eb:{
                type: String,
                require:true
            },
            th_name:{
                type: String,
                require:true
            },
            th_prevBal:{
                type: String,
                require:true
            },
            th_newBal:{
                type: String,
                require:true
            },
            th_tt:{
                type: String,
                require:true
            },
            th_rem:{
                type: String,
                require:true
            }
                
})

const TransHisdb = mongoose.model('transHisdb',transHisSchema)
module.exports = TransHisdb