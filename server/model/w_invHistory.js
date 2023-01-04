const mongoose = require('mongoose')


const invHisSchema = new mongoose.Schema({
    ih_dateCTR:{
        type:String,
        require:true
    },
    ih_date:{
        type: String,
        require:true
    },
    ih_time:{
        type: String,
        require: true
    },
    ih_item:{
        type: String,
        require: true
    },
    ih_type:{
        type: String,
        require:true
    },
    ih_prev:{
        type: String,
        require: true
    },
    ih_added:{
        type: String,
        require: true
    },
    ih_new:{
        type: String,
        require:true
    },
    ih_rem:{
        type: String,
        require:true
    },
    ih_eb:{
        type:String,
        require:true
    },
    ih_riceMill:{
        type: String,
        require: true
    },
    ih_driver:{
        type: String,
        require: true
    },
    ih_plate:{
        type: String,
        require: true
    },
    ih_reciept:{
        type: String,
        require:true
    },

    ih_prp:{
        type: String,
        require:true
    },
    ih_p15:{
        type: String,
        require:true
    },
    ih_p110:{
        type: String,
        require: true
    },
    ih_pmp:{
        type: String,
        require:true
    },
    ih_ptc:{
        type: String,
        require: true
    },
    ih_pw1:{
        type: String,
        require: true
    },
    ih_pw2:{
        type: String,
        require:true
    },
    ih_psp1:{
        type: String,
        require:true
    },
    ih_psp2:{
        type: String,
        require: true
    },
    ih_pDivert:{
        type: String,
        require: true
    }

    
})

const InvHisdb = mongoose.model('invHisdb', invHisSchema);
module.exports = InvHisdb;