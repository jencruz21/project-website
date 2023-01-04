const { rawListeners } = require('../model/w_transItemBin');
var TransItemBindb = require('../model/w_transItemBin');




exports.transItemBinCreate = (req,res)=>{
    //validate request
    if(!req.body){
        res.status(400).send({message:"Content can not be empty"});
        return;
    }
    
const transItemBin = new TransItemBindb({

    
tib_dateCTR:req.body.tibDateCTR,
tib_date:req.body.tibDate,
tib_time:req.body.tibTime,
tib_eb:req.body.tibEB,
tib_item:req.body.tibItem,
tib_type:req.body.tibType,
tib_quan:req.body.tibQuan,
tib_pricing:req.body.tibPricing,
tib_price:req.body.tibPrice,
tib_amount:req.body.tibAmount,
tib_rem:req.body.tibRem,
tib_og:req.body.tibOG,
tib_iKey:req.body.tibIKey

})

transItemBin.save(transItemBin)
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



exports.transItemBinFind=(req,res)=>{
    TransItemBindb.find()
    .then(transItemBin=>{
        res.send(transItemBin)
    })
    .catch(err=>{
        res.status(500).send({message:err.message ||" Error Occured while retrieving user information"})
    })
    }
    
    //retrieve and return all user/ retrieve and return a single user
    exports.transItemBinFindId=(req,res)=>{
        if(req.query.id){
            const id = req.query.id;
            TransItemBindb.findById(id)
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
            TransItemBindb.find()
            .then(user=>{
                res.send(user)
            })
            .catch(err=>{
                res.status(500).send({message:err.message ||" Error Occured while retrieving user information"})
            })
        }
    
        }


        exports.transItemBinUpdate = (req,res)=>{
            if(!req.body){
                return res
                .status(400)
                .send({message:"Data to Update Cannot be Empty"})
            }
            const id = req.params.id;
            TransItemBindb.findByIdAndUpdate(id, req.body,{useFindAndModify:false})
        
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

        exports.TransItemDelete = (req,res)=>{
            const id = req.params.id;
        
            TransItemBindb.findByIdAndDelete(id)
            .then(data=>{
               if(!data){
                res.status(404).send({message: `Cannot Delete with id ${id}.Maybe id is wrong`})
               } else{
                res.send({
                    message:" was deleted succesfuly!"
                })
               }
            })
            .catch(err=>{
                res.status(500).send({
                    message:"Could not delete User with id = "+ id
                });
            });
        }
        