const {rawListeners} = require('../model/w_customer')
const Customerdb = require('../model/w_customer')



exports.customerCreate = (req,res)=>{
    if(!req.body){
        res.status(400).send({message:"Content not empty"});
        return;
    }

    //new customer

    const customer = new Customerdb({
        c_name: req.body.cName,
        c_date: req.body.cDate,
        c_location: req.body.cLocation,
        c_cpNum: req.body.cNum,
        c_caban: req.body.cCaban,
        c_price: req.body.cPrice,
        c_bal: req.body.cBal
    })
    customer.save(customer)
    .then(data=>{
    
        res.redirect("/staff/customer")
    })
    .catch(err=>{
        res.status(500).send({
            message:err.message ||" Some COntent error"
        });
    });
}


//retrive customer and return data

exports.customerFind = (req,res)=>{
   Customerdb.find()
   .then(customer=>{
    res.send(customer)
   }).catch(err=>{
    res.status(500).send({message:err.message || " Error in Customer Retrieving data"})
   })
}


exports.customerFindId=(req,res)=>{
    if(req.query.id){
        const id = req.query.id;
        Customerdb.findById(id)
        .then(data=>{
            if(!data){
                res.status(404).send({message:"Not Found Custumer with ID"})
            }else{
                res.send(data)
            }
        })
        .catch(err=>{
            res.status(500).send({message: "Error in retrieving in Custumer"})
        })  
    }else{
        Customerdb.find()
        .then(customer=>{
            res.send(customer)
        })
        .catch(err=>{
            res.status(500).send({message:err.message || " Error Occurd while Retrieving customer information"})
        })
    }
}

//Update a new Information for a Customer


exports.customerUpdate = (req,res)=>{
    if(!req.body){
        return res.status(400).send({message:" Data to Update Cannot Be Empty"})
    }
    const id = req.params.id;
    Customerdb.findByIdAndUpdate(id, req.body,{useFindAndModify:false})
    .then(data=>{
        if(!data){
            res.status(404).send({message:`Cannot Update with ${id}. User not Found`})
        }else{
            res.send(data)
        }
    })
    .catch(err=>{
        res.status(500).send({message: "Error Update User Info"})
    })
}



//delete User
exports.customerDelete = (req,res)=>{
    const id = req.params.id;

    Customerdb.findByIdAndDelete(id)
    .then(data=>{
        if(!data){
            res.status(404).send({message:`cannot delete id ${id}`})
        }else{
            res.send({
                message:"User was deleted Successfully"
            })
        }
    }).catch(err=>{
        res.status(500).send({
            message:"Could Not Delete User id = " + id
        });
    });
}