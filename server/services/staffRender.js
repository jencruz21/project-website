const axios = require('axios');


exports.staffCustomer = (req,res) =>{

    axios.get("http://localhost:3000/admin/api/customers")
    .then(function(response){
        console.log(response.data)
        res.render('staffCustomer/customer', {customers:response.data})
    })
    .catch(err=>{
        res.send(err)
    })
}

exports.staffCustomerHis = (req,res) =>{
    axios.get("http://localhost:3000/admin/api/customerHis")
    .then(function(response){
      console.log(response.data)
    res.render('staffCustomer/customerHis',{customerHis:response.data})
})
.catch(err=>{
    res.send(err)
})
}


exports.staffInv = (req,res)=>{
    axios.get("http://localhost:3000/admin/api/inv")
    .then(function(response){
        console.log(response.data)
        res.render("staffInv/staffInv",{inv:response.data})
    })
    .catch(err=>{
        res.send(err)
    })
}

exports.staffInvHis = (req,res)=>{
    axios.get("http://localhost:3000/admin/api/invHis")
    .then(function(response){
        console.log(response.data)
        res.render("staffInv/staffInvHis",{invHis:response.data})
    })
    .catch(err=>{
        res.send(err)
    })
  
}


exports.staffTrans = (req,res)=>{
    axios.get("http://localhost:3000/admin/api/trans")
    .then(function(response){
        res.render('staffTrans/staffTrans',{trans:response.data})
    })
    .catch(err=>{
        res.send(err)
    })

   
}
exports.staffTruck = (req,res)=>{
    axios.get("http://localhost:3000/admin/api/truckRoute")
    .then(function(response){
        res.render('staffTruck/staffTruck',{truck:response.data})
    })
    .catch(err=>{
        res.send(err)
    })

}
exports.staffControl = (req,res)=>{
    res.render('staffControl/staffControl')
}