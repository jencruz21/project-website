const { rawListeners } = require('../model/w_transactionItem');
const TransItemdb = require('../model/w_transactionItem');



exports.transItemCreate = (req,res)=>{
    //validate request
    if(!req.body){
        res.status(400).send({message:"Content can not be empty"});
        return;
    }

    const transItem = new TransItemdb({


        ti_dateCTR:req.body.tiDateCTR,
        ti_date:req.body.tiDate,
        ti_time:req.body.tiTime,
        ti_eb:req.body.tiEB,
        ti_ar:req.body.tiAR,
        ti_cusName:req.body.tiCusName,
        ti_item:req.body.tiItem,
        ti_type:req.body.tiType,
        ti_quantity:req.body.tiQuantity,
        ti_pricing:req.body.tiPricing,
        ti_price:req.body.tiPrice,
        ti_amount:req.body.tiAmount,
        ti_route:req.body.tiRoute,
        ti_loc:req.body.tiLoc,
        ti_og:req.body.tiOG
    
    })

    transItem.save(transItem)
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

exports.transItemFind=(req,res)=>{
    if(req.query.id){
        const id = req.query.id;
        TransItemdb.findById(id)
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
        TransItemdb.find()
        .then(transItem=>{
            res.send(transItem)
        })
        .catch(err=>{
            res.status(500).send({message:err.message ||" Error Occured while retrieving user information"})
        })
    }

    }


    exports.transItemUpdate = (req,res)=>{
        if(!req.body){
            return res
            .status(400)
            .send({message:"Data to Update Cannot be Empty"})
        }
        const id = req.params.id;
        TransItemdb.findByIdAndUpdate(id, req.body,{useFindAndModify:false})
    
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
    

    exports.transItemDelete = (req,res)=>{
        const id = req.params.id;
    
        TransItemdb.findByIdAndDelete(id)
        .then(data=>{
           if(!data){
            res.status(404).send({message: `Cannot Delete with id ${id}.Maybe id is wrong`})
           } else{
            res.send({
                message:"User was deleted succesfuly!"
            })
           }
        })
        .catch(err=>{
            res.status(500).send({
                message:"Could not delete  with id = "+ id
            });
        });
    }
    