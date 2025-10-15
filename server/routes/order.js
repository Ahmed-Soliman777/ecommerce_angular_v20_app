const express = require('express')
const route = express()

const OrderCtrl = require('../controllers/order.ctrl')
const middleware = require('../middleware/auth.middleware')

route.post('/order', middleware.authenticate, OrderCtrl.addOrders)

module.exports = route