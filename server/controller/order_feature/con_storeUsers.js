const StoreUser = require("../../model/order_feature/w_storeUsers");
const joi = require("joi");
const bcrypt = require('bcrypt');
require("dotenv").config();

exports.createUser = async (req, res) => {
    try {
        const StoreUserObject = joi.object({
            su_first_name: joi.string().required(),
            su_last_name: joi.string().required(),
            su_address1: joi.string().required(),
            su_address2: joi.string(),
            su_email: joi.string().pattern(new RegExp("[^@]+@[^@]+\.[a-zA-Z]{2,}")).required(),
            su_password: joi.string().min(8).required(),
            su_mobile_no: joi.string().pattern(new RegExp("^(09|\\+639)\\d{9}$")).required(),
            su_zip_code: joi.number().required(),
            su_city: joi.string().required()
        });
    
        const { error, value } = StoreUserObject.validate(req.body);

        if (error) {
            return res.status(400).send("400 Bad request - Please enter all fields " + error);
        }

        const hashed_pw =  await bcrypt.hashSync(value.su_password, 10);
        console.log(hashed_pw);
        
        const model = new StoreUser({
            su_first_name: value.su_first_name,
            su_last_name: value.su_last_name,
            su_address_1: value.su_address1,
            su_address_2: value.su_address2,
            su_email: value.su_email,
            su_password: hashed_pw,
            su_mobile_no: value.su_mobile_no,
            su_zip_code: value.su_zip_code,
            su_city: value.su_city
        });

        const response = await model.save();
        console.log(response);

        return res.status(200).send(response);
    } catch (error) {
        return res.status(400).send("400 Bad Request " + error.message);
    }
}

exports.deleteUserById = async (req, res) => {
    try {
        const userIdObject = joi.object({
            _id: joi.string().required()
        });

        const { error, value } = userIdObject.validate(req.params); 

        if (error) {
            console.log(error)
            return res.status(400).send(process.env.STATUS_400 + " - Please Enter All fields");
        }

        const response = await StoreUser.findByIdAndDelete(value._id);

        return res.status(200).send(response);
    } catch (error) {
        console.log(error.message);
        return res.status(400).send(process.env.STATUS_400);
    }
}

exports.updateUserById = async (req, res) => {
    try {
        const StoreUserObject = joi.object({
            _id: joi.string().required(),
            su_first_name: joi.string().required(),
            su_last_name: joi.string().required(),
            su_address1: joi.string().required(),
            su_address2: joi.string(),
            su_email: joi.string().pattern(new RegExp("[^@]+@[^@]+\.[a-zA-Z]{2,}")).required(),
            su_password: joi.string().min(8).required(),
            su_mobile_no: joi.string().pattern(new RegExp("^(09|\\+639)\\d{9}$")).required(),
            su_zip_code: joi.number().required(),
            su_city: joi.string().required()
        });
    
        const { error, value } = StoreUserObject.validate(req.body);

        if (error) {
            return res.status(400).send(process.env.STATUS_400 + " - Please Enter All fields " + error);
        }

        const response = await StoreUser.findByIdAndUpdate(value._id, {
            su_first_name: value.su_first_name,
            su_last_name: value.su_last_name,
            su_address_1: value.su_address1,
            su_address_2: value.su_address2,
            su_email: value.su_email,
            su_password: hashed_pw,
            su_mobile_no: value.su_mobile_no,
            su_zip_code: value.su_zip_code,
            su_city: value.su_city
        });

        return res.status(200).send(response._id);
    } catch (error) {
        console.log(error);
        return res.status(400).send("400 Bad Request - " + error.message);
    }
}

exports.findUserById = async (req, res) => {
    console.log(req.params._id);
    try {
        const userIdObject = joi.object({
            _id: joi.string().required()
        });

        const { error, value } = userIdObject.validate(req.query); 

        if (error) {
            return res.status(400).send(process.env.STATUS_400 + " - Please Enter All fields " + error);
        }

        const response = await StoreUser.findById(value._id);

        return res.status(200).send(response);
    } catch (error) {
        return res.status(400).send("400 Bad Request - " + error.message);
    }
}

exports.findUsers = async (req, res) => {
    try {
        const response = await StoreUser.find().select("_id su_first_name su_last_name su_address_1 su_email su_mobile_no su_zip_code su_city");
        return res.status(200).send(response);
    } catch (error) {
        return res.status(400).send(process.env.STATUS_400 + " - " +  error.message);
    }
}

exports.findUsersBySearch = async (req, res) => {
    const SearchObject = joi.object({
        query: joi.string().required()
    });

    const { error, value } = SearchObject.validate(req.body);

    if (error) {
        return res.status(400).send(error);
    }

    try {
        const response = await StoreUser.find({ $or: [
            { 
                su_first_name: {
                    $regex: `.*${value.query}*.` 
                }
            },
            { 
                su_last_name: {
                    $regex: `.*${value.query}*.` 
                }
            },
            {
                email: {
                    $regex: `.*${value.query}*.`
                }
            }
        ]});
        return res.status(200).send(response);
    } catch (error) {
        return res.status(400).send(error.message);
    }
}