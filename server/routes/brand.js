const express = require('express')
const app = express()

const brandControllers = require('../controllers/brand.ctrl')
const middleWare = require('../middleware/auth.middleware')

app.get('/brands', brandControllers.handleGetBrands)

app.get('/brands/:id', brandControllers.handleGetBrandById)

app.post('/brand', middleWare.authenticate, middleWare.isAdmin, brandControllers.handleAddBrands)

app.put('/brand/update/:id', middleWare.authenticate, middleWare.isAdmin, brandControllers.handleUpdateBrand)

app.delete('/brand/delete/:id', middleWare.authenticate, middleWare.isAdmin, brandControllers.handleDeleteBrand)

module.exports = app