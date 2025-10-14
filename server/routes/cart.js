const express = require('express')
const route = express()

const cartCtrl = require('../controllers/cart.ctrl')
const middleWare = require('../middleware/auth.middleware')

route.get('/cart', middleWare.authenticate, cartCtrl.getCart)
route.post('/cart/:id', middleWare.authenticate, cartCtrl.addCart)
route.delete('/cart/:id', middleWare.authenticate, cartCtrl.removeCart)

module.exports = route