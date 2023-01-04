const mongoose = require("mongoose")


const usersSchema = mongoose.Schema({
    username:{
        type: String,
        require: true
    },
    password:{
        type: String,
        require: true
    }
})

const Usersdb = mongoose.model('usersdb',usersSchema)
module.exports = Usersdb