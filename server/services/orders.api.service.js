const qs = require("qs");
const axios = require("axios");
const cities = require("philippines/cities");
const sortedCities = cities.sort((a, b) => (a.name > b.name) ? 1 : -1);
require("dotenv").config();

exports.registerUser = (req, res) => {
    const { 
        su_first_name, 
        su_last_name, 
        su_email, 
        su_password, 
        su_mobile_no, 
        su_address1, 
        su_zip_code, 
        su_city
    } = req.body;
    
    axios.post(process.env.SERVER_URL + "/orders/api/user/register", qs.stringify({
        su_first_name,
        su_last_name,
        su_email,
        su_password,
        su_address1,
        su_mobile_no,
        su_zip_code,
        su_city}), 
        {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            }
        })
    .then(data => {
        console.log(data);
        return res.status(200).render("ordering-system/register", {
            cities: sortedCities
        });
    })
    .catch(error => {
        return res.status(400).send(process.env.STATUS_400 + " - " + error);
    });
}

exports.updateUser = (req, res) => {
    const { 
        su_first_name, 
        su_last_name, 
        su_email, 
        su_password, 
        su_mobile_no, 
        su_address1, 
        su_zip_code, 
        su_city
    } = req.body;

    axios.put(process.env.SERVER_URL + "/orders/api/user/edit", qs.stringify({
        su_first_name,
        su_last_name,
        su_email,
        su_password,
        su_address1,
        su_mobile_no,
        su_zip_code,
        su_city}), 
        {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            }
        })
    .then(data => {
        console.log(data);
        return res.status(200).send("Edited " + data);
        // return res.status(200).render("ordering-system/register", {
        //     cities: sortedCities
        // });
    })
    .catch(error => {
        return res.status(400).send(process.env.STATUS_400 + " - " + error);
    });
}

exports.fetchUsers = (req, res) => {
    axios.get(process.env.SERVER_URL + "/orders/api/users")
        .then(data => {
            // this needs to be rendered
            return res.status(200).send(data);
        })
        .catch(error => {
            return res.status(400).send(process.env.STATUS_400 + " - " + error.message);
        });
}

exports.fetchUser = (req, res) => {
    axios.get(process.env.SERVER_URL + "/orders/api/user", {
        params: {
            _id: req.query._id
        }
    })
    .then(data => {
        // return res.status(200).render("ordering-system/user-details", { user: data })
        return res.status(200).send(data);
    })
    .catch(error => {
        return res.status(400).send(process.env.STATUS_400 + " - " + error.message)
    });
}

exports.fetchUserForEdit = (req, res) => {
    axios.get(process.env.SERVER_URL + "/orders/api/user", {
        params: {
            _id: req.query._id
        }
    })
    .then(data => {
        // return res.status(200).render("ordering-system/edit-user-details", { user: data })
        return res.status(200).send(data);
    })
    .catch(error => {
        return res.status(400).send(process.env.STATUS_400 + " - " + error.message)
    });
}