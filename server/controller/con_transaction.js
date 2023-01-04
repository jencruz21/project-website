const  {rawListeners} = require('../model/w_transaction');

const Transactiondb = require('../model/w_transaction')

exports.transCreate = (req,res)=>{
    if(!req.body){
        res.status(400).send({message:"Empty"})
        return;
    }


    const trans = new Transactiondb({
        t_dateCTR:req.body.tDateCTR,
        t_date:req.body.tDate,
        t_time:req.body.tTime,
        t_eb:req.body.tEb,
        t_ar:req.body.tAr,
        t_name:req.body.tName,
        t_items:req.body.tItems,
        t_cavans:req.body.tCavans,
        t_subtotal:req.body.tSubtotal,
        t_prevB:req.body.tPrevB,
        t_prevR:req.body.tPrevR,
        t_addons:req.body.tAddons,
        t_less:req.body.tLess,
        t_backLoad:req.body.tBackLoad,
        t_grandTotal:req.body.tGrandTotal,
        t_mCash:req.body.tMcash,
        t_checkBal:req.body.tCheckBal,
        t_checkNum:req.body.tCheckNum,
        t_checkDate:req.body.tCheckDate,
        t_mChange:req.body.tMchange,
        t_newR:req.body.tNewR,
        t_newB:req.body.tNewB,
        t_st:req.body.tst,
        t_drEdit:req.body.tDredit,
        t_siEdit:req.body.tSiedit,
        t_orEdit:req.body.tOredit,
        t_transType:req.body.tTranstype,
        t_delR:req.body.tDelR,
        t_delL:req.body.tDelL,
        t_contact:req.body.tContact,
        t_address:req.body.tAddress,
        t_OG:req.body.tOG,
        t_cusKey:req.body.tCuskey,
        t_notes:req.body.tnotes,
        t_prevSt:req.body.tPrevSt,
        t_prevLt:req.body.tPrevLt,
        t_rId:req.body.trid

    })
    trans.save(trans)
    .then(data=>{
        // res.send(data)
        res.redirect('/staff/transaction')
    })
    .catch(err=>{
        res.status(500).send({
            message:err.message || "Some Error "
        });
    });
}

exports.transFind= (req,res)=>{
    if(req.query.id) {
        const id = req.query.id;
        Transactiondb.findById(id)
        .then(data=> {
            if(!data) {
                res.status(404).send({message:"Not found user with id " + id})
            } else {
                res.send(data)
            }
        })
        .catch(err=>{

            res.status(500).send({message: "Error Retrieving id "+ id})
        })
    }else{
        Transactiondb.find()
        .then(trans=>{
            res.send(trans)
        })
        .catch(err=>{
            res.status(500).send({message:err.message ||" Error Occured while retrieving user information"})
        })
    }
}


exports.transUpdate = (req,res)=>{
    if(!req.body){
        return res
        .status(400)
        .send({message:"Data to Update Cannot be Empty"})
    }
    const id = req.params.id;
    Transactiondb.findByIdAndUpdate(id, req.body,{useFindAndModify:false})

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


exports.transDelete = (req,res)=>{
    const id = req.params.id;

    Transactiondb.findByIdAndDelete(id)
    .then(data=>{
       if(!data){
        res.status(404).send({message: `Cannot Delete with id ${id}.Maybe id is wrong`})
       } else{
        res.send({
            message:"Transaction was deleted succesfuly!"
        })
       }
    })
    .catch(err=>{
        res.status(500).send({
            message:"Could not delete User with id = "+ id
        });
    });
}
