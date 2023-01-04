const mongoose = require("mongoose")

const transItemBinSchema = new mongoose.Schema({


tib_dateCTR:{
    type: String,
    require:true
},
tib_date:{
    type: String,
    require:true
},
tib_time:{
    type: String,
    require:true
},
tib_eb:{
    type: String,
    require:true
},
tib_item:{
    type: String,
    require:true
},
tib_type:{
    type: String,
    require:true
},
tib_quan:{
    type: String,
    require:true
},
tib_pricing:{
    type: String,
    require:true
},
tib_price:{
    type: String,
    require:true
},
tib_amount:{
    type: String,
    require:true
},
tib_rem:{
    type: String,
    require:true
},
tib_og:{
    type: String,
    require:true
},
tib_iKey:{
    type: String,
    require:true
},


    
})

const TransItemBindb = mongoose.model('transItemBindb', transItemBinSchema);
module.exports = TransItemBindb;