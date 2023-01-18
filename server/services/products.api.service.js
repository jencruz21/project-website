const qs = require("qs");
const axios = require("axios");
require("dotenv").config();

exports.fetchProducts = () => {
    axios("/orders/api/products")
}