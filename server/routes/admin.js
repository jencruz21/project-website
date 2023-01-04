const express = require('express')
const route = express.Router()

const services = require("../services/adminRender");
const controller = require('../controller/con_admin');
const con_customer = require('../controller/con_custumer');
const con_customerHis = require('../controller/con_customerHis');
const con_inv = require('../controller/con_inv');
const con_invHis = require('../controller/con_invHis');
const con_transaction = require('../controller/con_transaction');
const con_transHis = require('../controller/con_transHis');
const con_transItem = require('../controller/con_transItem');
const con_transItemBin = require("../controller/con_transItemBin");
const con_truckRoute = require('../controller/con_truckRoute');
const con_users = require('../controller/con_users');
const con_inventory = require('../controller/con_inventory');

/**
 *  @description Root Route
 *  @method GET /
 */

route.get("/",services.adminDashRoute)

/**
 *  @description Root Route
 *  @method GET /
 */

route.get("/sales",services.adminSales);
route.get("/orders",services.adminOrder);
route.get("/income",services.adminIncome);
route.get("/inventory",services.adminInventory);
route.get('/adminCustomer',services.adminCustomer);
route.get('/adminTrans',services.adminTrans);
route.get('/adminInv', services.adminInv);
route.get('/adminTracking',services.adminTracking);
route.get("/riceRecords", services.adminRiceRecordsView);
//ADMIN API for adminUser

route.post('/api/adminUsers',controller.adminCreate);
route.get('/api/adminUsers',controller.adminFind);
route.put('/api/adminUsers/:id',controller.adminUpdate);
route.delete('/api/adminUsers/:id',controller.adminDelete);

//Customer Api

route.post('/api/customers',con_customer.customerCreate);
route.get('/api/customers',con_customer.customerFind)
route.get('/api/customers/:id',con_customer.customerFindId)
route.put('/api/customers/:id',con_customer.customerUpdate)
route.delete('/api/customers/:id',con_customer.customerDelete)


//Customer History Api

route.post('/api/customerHis',con_customerHis.custHisCreate)
route.get('/api/customerHis',con_customerHis.custHisFind)
route.get('/api/customerHis/:id',con_customerHis.custHisFindId)
route.put('/api/customerHis/:id',con_customerHis.custHisUpdate)
route.delete('/api/customerHis/:id',con_customerHis.custHisDelete)


//inv

route.post('/api/inv',con_inv.invCreate)
route.get('/api/inv',con_inv.invFInd)
route.get('/api/inv/:id',con_inv.invFindId)
route.put('/api/inv/:id',con_inv.invUpdate)
route.delete('/api/inv/:id',con_inv.invDelete)

//INV HISTORY
route.post('/api/invHis',con_invHis.invHisCreate)
route.get('/api/invHis',con_invHis.invHisFind)
route.get('/api/invHis/:id',con_invHis.invHisFindId)
route.put('/api/invHis/:id',con_invHis.invHisUpdate)
route.delete('/api/invHis/:id',con_invHis.invHisDelete)

//transaction

route.post('/api/trans',con_transaction.transCreate)
route.get('/api/trans',con_transaction.transFind)
route.put('/api/trans/:id',con_transaction.transUpdate)
route.delete('/api/trans/:id',con_transaction.transDelete)


//transaction History

route.post('/api/transHis',con_transHis.transHisCreate)
route.get('/api/transHis',con_transHis.transHisFind)
route.put('/api/transHis/:id',con_transHis.transHisUpdate)
route.delete('/api/transHis/:id',con_transHis.transHisDelete)

//trans Item
route.post('/api/transItem',con_transItem.transItemCreate)
route.get('/api/transItem',con_transItem.transItemFind)
route.put('/api/transItem/:id',con_transItem.transItemUpdate)
route.delete('/api/transItem/:id',con_transItem.transItemDelete)

//trans item bin

route.post('/api/tranItemBin',con_transItemBin.transItemBinCreate)
route.get('/api/tranItemBin',con_transItemBin.transItemBinFind)
route.get('/api/tranItemBin/:id',con_transItemBin.transItemBinFindId)
route.put('/api/tranItemBin/:id',con_transItemBin.transItemBinUpdate)
route.delete('/api/tranItemBin/:id',con_transItemBin.TransItemDelete)

//truck route

route.post('/api/truckRoute',con_truckRoute.truckRouteCreate)
route.get('/api/truckRoute',con_truckRoute.truckRouteFind)
route.get('/api/truckRoute/:id',con_truckRoute.truckRouteFindId)
route.put('/api/truckRoute/:id',con_truckRoute.truckRouteUpdate)
route.delete('/api/truckRoute/:id',con_truckRoute.truckRouteDelete)

//USERS

route.post('/api/users',con_users.usersCreate)
route.get('/api/users',con_users.usersFind)
route.get('/api/users/:id',con_users.usersFindId)
route.put('/api/users/:id',con_users.usersUpdate)
route.delete('/api/users/:id',con_users.usersDelete)

// ADMIN RICE RECORDS
route.get("/api/rice/get/:id", con_inventory.getRiceById);
route.get("/api/rice/get", con_inventory.getRices);


module.exports= route