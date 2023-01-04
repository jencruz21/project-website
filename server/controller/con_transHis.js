const {rawListeners} = require("../model/w_transactionHis")
const TransHisdb = require("../model/w_transactionHis")



exports.transHisCreate = (req,res)=>{
    //validate request
    if(!req.body){
        res.status(400).send({message:"Content can not be empty"});
        return;
    }

    const transHis = new TransHisdb({
       
        th_dateCTR:req.body.thDateCTR,
        th_date:req.body.thDate,
        th_time:req.body.thTime,
        th_eb:req.body.thEb,
        th_name:req.body.thName,
        th_prevBal:req.body.thPrevBal,
        th_newBal:req.body.thNewBal,
        th_tt:req.body.thTT,
        th_rem:req.body.thRem

    })

    transHis.save(transHis)
.then(data=>{
    res.send(data)
    // res.redirect("/")
})
.catch(err=>{
    res.status(500).send({
        message:err.message ||"Some error occurred while creating a create operation"
    });
});
}

exports.transHisFind=(req,res)=>{
    if(req.query.id){
        const id = req.query.id;
        TransHisdb.findById(id)
        .then(data=>{
            if(!data){
                res.status(404).send({message:"Not found user with id " + id})
            }else{
                res.send(data)
            }
        })
        .catch(err=>{

            res.status(500).send({message: "Error Retrieving id "+ id})
        })
    }else{
        TransHisdb.find()
        .then(transHis=>{
            res.send(transHis)
        })
        .catch(err=>{
            res.status(500).send({message:err.message ||" Error Occured while retrieving user information"})
        })
    }

    }

    exports.transHisUpdate = (req,res)=>{
        if(!req.body){
            return res
            .status(400)
            .send({message:"Data to Update Cannot be Empty"})
        }
        const id = req.params.id;
        TransHisdb.findByIdAndUpdate(id, req.body,{useFindAndModify:false})
    
        .then(data=>{
            if(!data){
            res.status(404).send({message:`Cannot Update user with ${id}.Maybe user not Found!`})
        }else{
            res.send(data)
        }
        })
        .catch(err=>{
            res.status(500).send({message: "Error Update User Information"})
        })
    }
    

    
exports.transHisDelete = (req,res)=>{
    const id = req.params.id;

    TransHisdb.findByIdAndDelete(id)
    .then(data=>{
       if(!data){
        res.status(404).send({message: `Cannot Delete with id ${id}.Maybe id is wrong`})
       } else{
        res.send({
            message:"History was deleted succesfuly!"
        })
       }
    })
    .catch(err=>{
        res.status(500).send({
            message:"Could not delete User with id = "+ id
        });
    });
}


