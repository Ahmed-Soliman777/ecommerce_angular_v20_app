const express = require('express')
const app = express()

const brandControllers = require('../controllers/brand.ctrl')

app.get('/brands', brandControllers.handleGetBrands)

app.get('/brands/:id', brandControllers.handleGetBrandById)

app.post('/brand', brandControllers.handleAddBrands)

app.put('/brand/update/:id', brandControllers.handleUpdateBrand)

app.delete('/brand/delete/:id', brandControllers.handleDeleteBrand)

module.exports = app