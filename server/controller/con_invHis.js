const {rawListeners} = require('../model/w_invHistory')
const InvHisdb = require('../model/w_invHistory')


exports.invHisCreate = (req,res)=>{
    //validate request
    if(!req.body){
        res.status(400).send({message:"errr 400"});
        return;
    }

    //new inv History


    const invHis = new InvHisdb({

            ih_dateCTR:req.body.ihDateCTR,
            ih_date:req.body.ihDate,
            ih_time:req.body.ihTime,
            ih_item:req.body.ihItem,
            ih_type:req.body.ihType,
            ih_prev:req.body.ihPrev,
            ih_added:req.body.ihAdded,
            ih_new:req.body.ihNew,
            ih_rem:req.body.ihRem,
            ih_eb:req.body.ihEb,
            ih_riceMill:req.body.ihRiceMill,
            ih_driver:req.body.ihDriver,
            ih_plate:req.body.ihPlate,
            ih_reciept:req.body.ihReciept,
            ih_prp:req.body.ihPrp,
            ih_p15:req.body.ihp15,
            ih_p110:req.body.ihp110,
            ih_pmp:req.body.ihPmp,
            ih_ptc:req.body.ihPtc,
            ih_pw1:req.body.ihPw1,
            ih_pw2:req.body.ihpw2,
            ih_psp1:req.body.ihpsp1,
            ih_psp2:req.body.ihpsp2,
            ih_pDivert:req.body.ihpDivert,
    })
    invHis.save(invHis)
    .then(data=>{
        res.send(data)
        //res.rsdirect('')
    })
    .catch(err=>{
        res.status(500).send({
            message:err.message || "ERRROR IN SAVING DATA"
        })
    })
}

//retrive

exports.invHisFind = (req,res)=>{
    InvHisdb.find()
    .then(invHis=>{
        res.send(invHis)
    })
    .catch(err=>{
        res.status(500).send({message:err.message || " ERROR retrieve information"})
    })
}

exports.invHisFindId = (req,res)=>{
    if(req.query.id){
        const id = req.query.id;
        InvHisdb.findById(id)
        .then(data=>{
            if(!data){
                res.status(404).send({message:"Not Found ID"})
            }else{
                res.send(data)
            }
        })
        .catch(err=>{
            res.status(500).send({message:" ERROR RETRIVIENG ID"})
        })
    }else{
        InvHisdb.find()
        .then(invHis=>{
            res.send(invHis)
        })
        .catch(err=>{
            res.status(500)
        })
    }
}


//Update

exports.invHisUpdate = (req,res)=>{
    if(!req.body){
        return res.status(400).send({message:" Data Cant Update is Empty"})
    }
    const id = req.params.id;
    InvHisdb.findByIdAndUpdate(id, req.body,{useFindANdModify:false})
    .then(data=>{
        if(!data){
            re.status(404).send({message:`Error ${id}`})
        }else{
            res.send(data)
        }
    })
    .catch(err=>{
        res.status(500).send({message: "ERRROOOORRRR"})
    })
}


//delete

exports.invHisDelete = (req,res)=>{
    const id = req.params.id;

    InvHisdb.findByIdAndDelete(id)
    .then(data=>{
        if(!data){
            res.status(404).send({message:` Cannot Delete with id ${id}`})
        }else{
            res.send({
                message:"History Was Deleted"
            })
        }
    })
    .catch(err=>{
        res.status(500).send({
            message:"Could not Delete User" + id
        })
    })
}