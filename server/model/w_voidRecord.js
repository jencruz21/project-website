const mongoose = require('mongoose')

const voidRecSchema = new mongoose.Schema({

        v_dateCTR:{
            type:String,
            require:true
        },
        v_date:{
            type:String,
            require:true
        },
        v_time:{
            type:String,
            require:true
        },
        v_eb:{
            type:String,
            require:true
        },
        v_ar:{
            type:String,
            require:true
        },
        v_cusName:{
            type:String,
            require:true
        },
        v_item:{
            type:String,
            require:true
        },
        v_type:{
            type:String,
            require:true
        },
        v_quan:{
            type:String,
            require:true
        },
        v_pricing:{
            type:String,
            require:true
        },
        v_price:{
            type:String,
            require:true
        },
        v_amount:{
            type:String,
            require:true
        },
        v_route:{
            type:String,
            require:true
        },
        v_location:{
            type:String,
            require:true
        },
        v_og:{
            type:String,
            require:true
        }
       
})
const VoidRecorddb = mongoose.model('voidRecorddb',voidRecSchema)
module.exports = VoidRecorddb