const { rawListeners } = require("../model/w_customerHistory")
const CustomerHisdb = require('../model/w_customerHistory')



// create and save  customer History 

exports.custHisCreate = (req,res)=>{
    //validate request
    if(!req.body){
        res.status(400).send({message:"Content error"});
        return;
    }


    //new Customer History

    const customerHis = new CustomerHisdb({
        
        ch_name:req.body.chName,
        ch_dateCTR:req.body.chDateCTR,
        ch_date:req.body.chDate,
        ch_time:req.body.chTime,
        ch_prevRem:req.body.chPrevRem,
        ch_prevBal:req.body.chPrevBal,
        ch_newRem:req.body.chNewRem,
        ch_st:req.body.chSt,
        ch_rem:req.body.chRem
    })
    customerHis.save(customerHis)
    .then(data=>{
        res.redirect('/staff/customerHis')

    }).catch(err=>{
        res.status(500).send({
            message:err.message || "Some Error when creating new data"
        });
    });
};


exports.custHisFind = (req,res)=>{
    CustomerHisdb.find()
    .then(customerHis=>{
        res.send(customerHis)
    })
    .catch(err=>{
        res.status(500).send({message:err.message || "Error while retrieving data"})
    })
}
exports.custHisFindId = (req,res)=>{
    if(req.query.id){
        const id = req.query.id;
        CustomerHisdb.findById(id)
        .then(data=>{
            if(!data){
                res.status(404).send({message:"Not found user with id "+ id})
            }else{
                res.send(data)
            }
        })
        .catch(err=>{
            res.status(500).send({message:" Error Retrieving Id " + id})
        })
    }else{
        CustomerHisdb.find()
        .then(customerHis=>{
            res.send(customerHis)
        })
        .catch(err=>{
            res.status(500).send({message:err.message || "ERROR  in Customer History"})
        })
    }
}

exports.custHisUpdate = (req,res)=>{
    if(!req.body){
        return res
        .status(400)
        .send({message:"Data Error is IT EMpty"})
    }
    const id = req.params.id;
    CustomerHisdb.findByIdAndUpdate(id, req.body,{useFindAndModify:false})

    .then(data=>{
        if(!data){
            res.status(400).send({message:`Cannot Update History ${id}`})
        }else{
            res.send(data)
        }
    })
    .catch(err=>{
        res.status(500).send({message: "Error Update History"})
    })
}


exports.custHisDelete = (req,res)=>{
    const id =req.params.id;

    CustomerHisdb.findByIdAndDelete(id)
    .then(data=>{
        if(!data){
            res.status(400).send({message: `Cannot Delete id ${id}`})
        }else{
            res.send({
                message:"User History Has Been Deleted"
            })
        }
    })
    .catch(err=>{
        res.status(500).send({
            message:"Could Not deleted User With Id " + id
        });
    });
}