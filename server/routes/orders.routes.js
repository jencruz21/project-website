const express = require("express");
const router = express.Router();
const path = require('path');
const routeService = require(path.resolve(__dirname, '../services/orders.render.service'));
const apiService = require(path.resolve(__dirname, '../services/orders.api.service'));
const ProductsController = require(path.resolve(__dirname, '../controller/order_feature/con_products'));
const StoreUsersController = require(path.resolve(__dirname, '../controller/order_feature/con_storeUsers'));
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
router.get("/product/details", routeService.getProductDetailsById);

// add to cart
router.get("/cart", routeService.cartPage);

//checkout
router.get("/checkout", routeService.checkoutPage);

// USERS
// login page
router.get("/login", routeService.loginPage);

// registration page
router.get("/register", routeService.registerPage);


// Update User
router.post("/register", apiService.registerUser);
router.post("/edit", apiService.updateUser);
router.get("/edit", apiService.fetchUserForEdit);
router.get("/users", apiService.fetchUsers);
router.get("/user", apiService.fetchUser);

// APIs

// PRODUCTS 
router.post("/api/product/post", ProductsController.createProduct);
router.post("/api/product/edit", ProductsController.updateProductById);
router.get("/api/products", ProductsController.fetchAllProducts);
router.get("/api/product", ProductsController.fetchProductById);
router.get("/api/product/sales", ProductsController.fetchProductsHighestSales);
router.get("/api/product/arrived", ProductsController.fetchProductsNewlyArrived);
router.get("/api/product/search", ProductsController.findProductBySearch);

// USERS
router.post("/api/user/register", StoreUsersController.createUser);
router.post("/api/user/edit", StoreUsersController.updateUserById);
router.get("/api/user", StoreUsersController.findUserById);
router.get("/api/users", StoreUsersController.findUsers);
router.get("/api/users/search", StoreUsersController.findUsersBySearch);
// TRANSACTIONS


module.exports = router;