const routes = ["/", "/about", "/contact", "/products", "/company-view"];
const dotenv = require('dotenv');
dotenv.config();

exports.homeRoutes = (req,res)=>{
    res.render("frontEnd/index", {
        page: req.url,
        routes: routes,
        maps_api_key: process.env.MAPS_API_KEY
    })
}

exports.about = (req,res)=>{
    res.render("frontEnd/about", {
        page: req.url,
        routes: routes,
        maps_api_key: process.env.MAPS_API_KEY
    })
}

exports.contact = (req,res)=>{
    res.render("frontEnd/contact", {
        page: req.url,
        routes: routes,
        maps_api_key: process.env.MAPS_API_KEY
    })
}

exports.product = (req,res)=>{
    res.render("frontEnd/product", {
        page: req.url,
        routes: routes,
        maps_api_key: process.env.MAPS_API_KEY
    })
}

exports.companyView = (req,res)=>{
    res.render("frontEnd/company-view", {
        page: req.url,
        routes: routes,
        maps_api_key: process.env.MAPS_API_KEY
    })
}

exports.gallery= (req,res)=>{
    res.render('frontEnd/gallery', {
        page: req.url,
        routes: routes,
        maps_api_key: process.env.MAPS_API_KEY
    })
}

exports.pageNotFound = (req, res) => {
    res.render("frontEnd/404", {
        page: req.url,
        routes: routes,
        maps_api_key: process.env.MAPS_API_KEY
    });
}

// Excluded routes
// exports.team = (req,res)=>{
//     res.render('frontEnd/team')
// }

// exports.testimonial = (req,res)=>{
//     res.render("frontEnd/testimonial")
// }

// exports.feature=(req,res)=>{
//     res.render("frontEnd/feature")
// }