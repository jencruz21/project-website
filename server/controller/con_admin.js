const { rawListeners } = require('../model/w_admin')
const Admindb = require('../model/w_admin');




exports.adminCreate = (req,res)=>{
    //validate request 

    if(!req.body){
        res.status(400).send({message:" Content Cannot be empty"})
        return;
    }

    //new User 

    const adminUser = new Admindb({
        superUser:req.body.superUser,
        superPassword:req.body.superPassword
    })
    adminUser.save(adminUser)
    .then(data=>{
        res.send(data)

        // res.redirect("/")
    })
    .catch(err=>{
        res.status(500).send({
            message:err.message || "Some error has found in Admin controller"
        });
    });


}

//retrieve and return user

exports.adminFind=(req,res)=>{
    Admindb.find()
    .then(adminUser=>{
        res.send(adminUser)
    })
    .catch(err=>{
        res.status(500).send({message:err.message ||"Error in retrieving Admin data info"})
    })
}

//retrieve and return all user/ retrieve a single user

exports.adminFind = (req,res)=>{
    if(req.query.id){
        const id = req.query.id;
        Admindb.findById(id)
        .then(data=>{
            if(!data){
                res.status(404).send({message:"Not found user with id" + id})
            }else{
                res.send(data)
            }
        })
        .catch(err=>{
            res.status(500).send({message:" error retrieving id " + id})
        })

    }else{
        Admindb.find()
        .then(adminUser=>{
            res.send(adminUser)
        })
        .catch(err=>{
            res.status(500).send({message:err.message || "Error Occurd retrieving user information"})
        })
    }
}


//Update a new user by user ID

exports.adminUpdate = (req,res) =>{
    if(!req.body){
        return res.status(400).send({message:"Data to update is Empty"})
    }
    const id = req.params.id;
    Admindb.findByIdAndUpdate(id, req.body,{useFindAndModify:false})
    
    .then(data=>{
        if(!data){
            res.status(404).send({message:`Cannot Update User ${id}.User not found`})
        }else{
            res.send(data)
        }
    })
    .catch(err=>{
        res.status(500).send({message:"Error Update Information"})
    })
}

//delete

exports.adminDelete = (req,res)=>{
    const id = req.params.id

    Admindb.findByIdAndDelete(id)
    .then(data=>{
        if(!data){
            res.status(404).send({message:`Cannot delete with id ${id}`})
        }else{
            res.send({
                message:"User was deleted successfully"
            })
        }
    })
    .catch(err=>{
        res.status(500).send({
            message: " Could not delete User with id" + id
        });
    });
}