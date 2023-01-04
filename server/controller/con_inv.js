const  { rawListeners } =  require('../model/w_inv');
const Invdb = require('../model/w_inv');

//create and save 

exports.invCreate = (req,res)=>{

    if(!req.body){
        res.status(400).send({message: "Content  can not be empty"});
        return;
    }
    //new user
    //ws1 = wholeSale

    const inv = new Invdb({

            i_item:req.body.iItem,
            i_type:req.body.iType,
            i_quantity:req.body.iQuantity,
            i_retail:req.body.iRetail,
            i_5kg:req.body.i5kg,
            i_10kg:req.body.i10kg,
            i_market:req.body.iMarket,
            i_tenC:req.body.iTenc,
            i_ws1:req.body.iws1,
            i_ws2:req.body.iws2,
            i_sp1:req.body.isp1,
            i_sp2:req.body.isp2,
            i_divert:req.body.iDivert,
            i_capital:req.body.iCapital,
            i_roc:req.body.iRoc
                
    })
    inv.save(inv)
    .then(data=>{
        // res.send(data)
        res.redirect("/staff/invoice")
    })
    .catch(err=>{
        res.status(500).send({
            message:err.message || "Some error while creating inv"
        });
    });
};

//retrieve and return inv data

exports.invFInd = (req,res)=>{
    Invdb.find()
    .then(inv=>{
        res.send(inv)
    })
    .catch(err=>{
        res.status(500).send({message:err.message || " Error retrieving data in inv"})
    })
}

//retrieve and return all INV data by id

exports.invFindId = (req,res)=>{
    if(req.query.id){
        const id = req.query.id;
        Invdb.findById(id)
        .then(data=>{
            if(!data){
                res.status(404).send({message:"ERRRRRRRRRRRRRRRRRRRR"+ id})
            }else{
                res.send(data)
            }
        })
        .catch(err=>{
            res.status(500).send({message:"ERRRRRRRRRR" +id})
        })
    }else{
        Invdb.find()
        .then(inv=>{
            res.send(inv)
        })
        .catch(err=>{
            res.status(500).send({message:err.message || " ERRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR"})
        })
    }
}

exports.invUpdate = (req,res)=>{
    if(!req.body){
        return res.status(400)
        .send({message:"Data to Update"})
    }
    const id = req.params.id;
    Invdb.findByIdAndUpdate(id, req.body,{useFindAndModify:false})
    .then(data=>{
        if(!data){
            res.status(404)
            .send({message:`Cannot Update id ${id}`})
        }else{
            res.send(data)
        }
    })
    .catch(err=>{
        res.status(500).send({message:"Catch Error"})
    });
};

exports.invDelete = (req,res)=>{
    const id =req.params.id;
    
  Invdb.findByIdAndDelete(id)
  .then(data=>{
    if(!data){
        res.status(404).send({message:`Cannot delete with id ${id}`})
    }else{
        res.send({
            message:" User was deleted succesfully!"
        })
    }
  })
  .catch(err=>{
    res.status(500).send({
        message:"Could not delete User with id "+ id
    })
  })
}


