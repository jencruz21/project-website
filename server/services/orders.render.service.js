const cities = require("philippines/cities");
const sortedCities = cities.sort((a, b) => (a.name > b.name) ? 1 : -1);

exports.indexPage = (req, res) => {
    res.status(200).render('ordering-system/index');
}

exports.storePage = (req, res) => {
    res.status(200).render('ordering-system/shop');
}

exports.getProductDetailsById = (req, res) => {
    res.status(200).render('ordering-system/detail')
}

exports.cartPage = (req, res) => {
    res.status(200).render('ordering-system/cart')
}

exports.checkoutPage = (req, res) => {
    res.status(200).render('ordering-system/checkout')
}

exports.loginPage = (req, res) => {
    res.status(200).render('ordering-system/login');
}

exports.registerPage = (req, res) => {
    res.status(200).render('ordering-system/register', {
        cities: sortedCities
    });
}

exports.userDetailsPage = (req, res) => {
    return res.status(200).render("ordering-system/user-details");
}

exports.updateUserDetailsPage = (req, res) => {
    return res.status(200).render("ordering-system/edit-user-details", {
        cities: sortedCities
    });
}