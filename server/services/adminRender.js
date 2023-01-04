const axios = require('axios');

exports.adminDashRoute = (req,res)=>{
    res.render("admin/index")
}
exports.adminSales = (req,res)=>{
    res.render("admin/sales")
}

exports.adminOrder = (req,res)=>{
    res.render("admin/orders")
}
exports.adminIncome= (req,res)=>{
    res.render("admin/income")
}
exports.adminInventory = (req,res)=>{
    res.render("admin/inventory")
}

exports.adminRiceRecords = (req, res) => {
    res.render('admin/admin.rice.records.views');
}

exports.adminCustomer= (req,res)=>{
    axios.get("http://localhost:3000/admin/api/customers")
    .then(function(response){
        console.log(response.data)
        res.render('admin/adminCustomer', {customers:response.data})
    })
    .catch(err=>{
        res.send(err)
    })
   
}

exports.adminTrans = (req,res)=>{
    axios.get("http://localhost:3000/admin/api/trans")
    .then(function(response){
        
    res.render('admin/adminTrans',{trans:response.data})
    })
    .catch(err=>{
        res.send(err)
    })

}

exports.adminInv = (req,res)=>{
    axios.get("http://localhost:3000/admin/api/invHis")
    .then(function(response){
        console.log(response.data)
        res.render("admin/adminInv",{invHis:response.data})
    })
    .catch(err=>{
        res.send(err)
    })
}

exports.adminTracking = (req,res)=>{

    axios.get("http://localhost:3000/admin/api/truckRoute")
    .then(function(response){
        res.render('admin/adminTracking',{truck:response.data})
    })
    .catch(err=>{
        res.send(err)
    })

  
}

exports.adminRiceRecordsView = (req, res) => {
    axios.get("http://localhost:3000/admin/api/rice/get")
    .then(function(response){
        console.log(response.data);
        res.render('admin/adminRice',{rice:response.data})
    })
    .catch(err=>{
        res.send(err)
    })   
}


