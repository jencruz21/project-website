const express = require("express");
const router = express.Router();
const path = require('path');
const routeService = require(path.resolve(__dirname, '../services/orders.render.service'));
const ProductsController = require(path.resolve(__dirname, '../controller/order_feature/con_products'));
// gawan naren ng user account
/**
 * 
 * 1. user details
 * 2. login
 * 3. signup
 * 
 */

// index home
router.get("/", routeService.indexPage);

// index shop
router.get('/store', routeService.storePage);

// product details
router.get("/product/details/:id", routeService.getProductDetailsById);

// add to cart
router.get("/cart", routeService.cartPage);

//checkout
router.get("/checkout", routeService.checkoutPage);

// user page
router.get("/user/details/:id", routeService.checkoutPage);

// login page
router.get("/login", routeService.loginPage);

// registration page
router.get("/register", routeService.checkoutPage);

// APIs

// PRODUCTS 
router.post("/api/product/post", ProductsController.createProduct);


module.exports = router;