const express = require('express')
const route = express()

const productCtrl = require('../controllers/product.ctrl')
const middleWare = require('../middleware/auth.middleware')

route.get('/products', productCtrl.handleGetProducts)
route.get('/product/:id', productCtrl.handleGetProductById)
route.get('/products/new-product', productCtrl.handleGetNewProducts)
route.get('/products/featured-product', productCtrl.handleGetFeaturedProducts)
route.post('/product/add', middleWare.authenticate, middleWare.isAdmin, productCtrl.handleAddProducts)
route.put('/product/update/:id', middleWare.authenticate, middleWare.isAdmin, productCtrl.handleUpdateProducts)
route.delete('/products/delete/:id', middleWare.authenticate, middleWare.isAdmin, productCtrl.handleDeleteProducts)

module.exports = route