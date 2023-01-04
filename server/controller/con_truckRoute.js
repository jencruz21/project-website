const { rawListeners } = require('../model/w_truckRoute');
const TruckRoutedb = require('../model/w_truckRoute');





exports.truckRouteCreate = (req,res)=>{
    //validate request
    if(!req.body){
        res.status(400).send({message:"Content can not be empty"});
        return;
    }
    
    const truckRoute = new TruckRoutedb({


        r_plateNum:req.body.rPlateNum,
        r_routeLocation: req.body.rRouteLocation,
        r_riceQuantity:req.body.rRiceQuantity,
        r_riceType:req.body.rRiceType,
        r_kiloQuantity:req.body.rKiloQuantity
        
    })
    truckRoute.save(truckRoute)
.then(data=>{

    res.redirect("/staff/tracking")
})
.catch(err=>{
    res.status(500).send({
        message:err.message ||"Some error occurred while creating a create operation"
    });
});

}


exports.truckRouteFind=(req,res)=>{
    TruckRoutedb.find()
    .then(truckRoute=>{
        res.send(truckRoute)
    })
    .catch(err=>{
        res.status(500).send({message:err.message ||" Error Occured while retrieving user information"})
    })
    }

    exports.truckRouteFindId=(req,res)=>{
        if(req.query.id){
            const id = req.query.id;
            TruckRoutedb.findById(id)
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
            TruckRoutedb.find()
            .then(truckRoute=>{
                res.send(truckRoute)
            })
            .catch(err=>{
                res.status(500).send({message:err.message ||" Error Occured while retrieving user information"})
            })
        }
    
        }

        exports.truckRouteUpdate = (req,res)=>{
            if(!req.body){
                return res
                .status(400)
                .send({message:"Data to Update Cannot be Empty"})
            }
            const id = req.params.id;
            TruckRoutedb.findByIdAndUpdate(id, req.body,{useFindAndModify:false})
        
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

        exports.truckRouteDelete = (req,res)=>{
            const id = req.params.id;
        
            TruckRoutedb.findByIdAndDelete(id)
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
                    message:"Could not delete User with id = "+ id
                });
            });
        }