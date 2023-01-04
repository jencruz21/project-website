const mongoose = require("mongoose")


const adminSchema = new mongoose.Schema({

    superUser:{
        type: String,
        require: true
    },
    superPassword:{
        type: String,
        require:true
    }
})

const Admindb = mongoose.model("admindb",adminSchema)
module.exports= Admindb