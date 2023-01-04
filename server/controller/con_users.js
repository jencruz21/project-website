const { rawListeners } = require('../model/w_users');
var Usersdb = require('../model/w_users');



exports.usersCreate = (req,res)=>{
    //validate request
    if(!req.body){
        res.status(400).send({message:"Content can not be empty"});
        return;
    }
    const users = new Usersdb({

        username:req.body.username,
        password:req.body.password
    })
    users.save(users)
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


exports.usersFind=(req,res)=>{
    Usersdb.find()
    .then(users=>{
        res.send(users)
    })
    .catch(err=>{
        res.status(500).send({message:err.message ||" Error Occured while retrieving user information"})
    })
    }
    
    //retrieve and return all user/ retrieve and return a single user
    exports.usersFindId=(req,res)=>{
        if(req.query.id){
            const id = req.query.id;
            Usersdb.findById(id)
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
            Usersdb.find()
            .then(user=>{
                res.send(user)
            })
            .catch(err=>{
                res.status(500).send({message:err.message ||" Error Occured while retrieving user information"})
            })
        }
    
        }
    // Update a new identified user by user ID
    
exports.usersUpdate = (req,res)=>{
    if(!req.body){
        return res
        .status(400)
        .send({message:"Data to Update Cannot be Empty"})
    }
    const id = req.params.id;
    Usersdb.findByIdAndUpdate(id, req.body,{useFindAndModify:false})

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


exports.usersDelete = (req,res)=>{
    const id = req.params.id;

    Usersdb.findByIdAndDelete(id)
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
