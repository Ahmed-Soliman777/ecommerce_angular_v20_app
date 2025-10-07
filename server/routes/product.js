const express = require('express')
const route = express()

const productCtrl = require('../controllers/product.ctrl')

route.get('/products', productCtrl.handleGetProducts)
route.get('/product/:id', productCtrl.handleGetProductById)
route.post('/product/add', productCtrl.handleAddProducts)
route.put('/product/update/:id', productCtrl.handleUpdateProducts)
route.delete('/products/delete/:id', productCtrl.handleDeleteProducts)

module.exports = route