const mongoose = require("mongoose")


const transItemSchema = mongoose.Schema({


            ti_dateCTR:{
                type: String,
                require:true
            },
            ti_date:{
                type: String,
                require:true
            },
            ti_time:{
                type: String,
                require:true
            },
            ti_eb:{
                type: String,
                require:true
            },
            ti_ar:{
                type: String,
                require:true
            },
            ti_cusName:{
                type: String,
                require:true
            },
            ti_item:{
                type: String,
                require:true
            },
            ti_type:{
                type: String,
                require:true
            },
            ti_quantity:{
                type: String,
                require:true
            },
            ti_pricing:{
                type: String,
                require:true
            },
            ti_price:{
                type: String,
                require:true
            },
            ti_amount:{
                type: String,
                require:true
            },
            ti_route:{
                type: String,
                require:true
            },
            ti_loc:{
                type: String,
                require:true
            },
            ti_og:{
                type: String,
                require:true
            },
         
})

const TransItemdb = mongoose.model("transItemdb",transItemSchema)
module.exports = TransItemdb