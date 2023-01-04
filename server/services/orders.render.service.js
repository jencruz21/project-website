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