const mongoose = require('mongoose')



const truckRouteSchema = new mongoose.Schema({
    r_plateNum:{
        type: String,
        require:true
    },
    r_routeLocation:{
        type: String,
        require: true
    },
    r_riceQuantity:{
        type: String,
        require: true
    },
    r_riceType:{
        type: String,
        require:true
    },
    r_kiloQuantity:{
        type: String,
        require: true
    }
    
})
const TruckRoutedb = mongoose.model('truckRoute',truckRouteSchema)
module.exports = TruckRoutedb;