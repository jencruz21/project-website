const express = require('express')
const route = express.Router()

const services = require('../services/staffRender')

route.get("/customer",services.staffCustomer);
route.get("/customerHis",services.staffCustomerHis)
route.get('/invoice',services.staffInv)
route.get('/invoiceHistory',services.staffInvHis)
route.get('/transaction',services.staffTrans)
route.get('/tracking',services.staffTruck)
route.get('/control',services.staffControl)


module.exports = route