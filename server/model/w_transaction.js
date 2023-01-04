const mongoose = require("mongoose")


const transSchema = new mongoose.Schema({
        t_dateCTR:{
            type: String,
            require:true
        },    
        t_date:{
            type: String,
            require:true
        },
        t_time:{
            type: String,
            require:true
        },
        t_eb:{
            type: String,
            require:true
        },
        t_ar:{
            type: String,
            require:true
        },
        t_name:{
            type: String,
            require:true
        },
        t_items:{
            type: String,
            require:true
        },
        t_cavans:{
            type: String,
            require:true
        },
        t_subtotal:{
            type: String,
            require:true
        },
        t_prevB:{
            type: String,
            require:true
        },
        t_prevR:{
            type: String,
            require:true
        },
        t_addons:{
            type: String,
            require:true
        },
        t_less:{
            type: String,
            require:true
        },
        t_backLoad:{
            type: String,
            require:true
        },
        t_grandTotal:{
            type: String,
            require:true
        },
        t_mCash:{
            type: String,
            require:true
        },
        t_checkBal:{
            type: String,
            require:true
        },
        t_checkNum:{
            type: String,
            require:true
        },
        t_checkDate:{
            type: String,
            require:true
        },
        t_mChange:{
            type: String,
            require:true
        },
        t_newR:{
            type: String,
            require:true
        },
        t_newB:{
            type: String,
            require:true
        },
        t_st:{
            type: String,
            require:true
        },
        t_drEdit:{
            type: String,
            require:true
        },
        t_siEdit:{
            type: String,
            require:true
        },
        t_orEdit:{
            type: String,
            require:true
        },
        t_transType:{
            type: String,
            require:true
        },
        t_delR:{
            type: String,
            require:true
        },
        t_delL:{
            type: String,
            require:true
        },
        t_contact:{
            type: String,
            require:true
        },
        t_address:{
            type: String,
            require:true
        },
        t_OG:{
            type: String,
            require:true
        },
        t_cusKey:{
            type: String,
            require:true
        },
        t_notes:{
            type: String,
            require:true
        },
        t_prevSt:{
            type: String,
            require:true
        },
        t_prevLt:{
            type: String,
            require:true
        },
        t_rId:{
            type: String,
            require:true
        }   
})

const Transactiondb = mongoose.model('transactiondb', transSchema);
module.exports = Transactiondb;