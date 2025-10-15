const express = require('express')
const route = express()

const OrderCtrl = require('../controllers/order.ctrl')
const middleware = require('../middleware/auth.middleware')

route.post('/order', middleware.authenticate, OrderCtrl.addOrders)
route.get('/order', middleware.authenticate, OrderCtrl.getOrders)
route.get('/admin/order', middleware.authenticate, middleware.isAdmin, OrderCtrl.getAllOrders)
route.post('/admin/order/:id', middleware.authenticate, middleware.isAdmin, OrderCtrl.updateOrder)

module.exports = route