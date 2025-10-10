const express = require('express')
const route = express()

const Category = require('../controllers/category.ctrl')
const middleWare = require('../middleware/auth.middleware')

route.get('/category', Category.handleGetCategories)

route.get('/category/:id', Category.handleGetCategoryById)

route.post('/category',middleWare.authenticate, middleWare.isAdmin, Category.handleAddCategory)

route.put('/category/:id',middleWare.authenticate, middleWare.isAdmin, Category.handleUpdateCategory)

route.delete('/category/:id',middleWare.authenticate, middleWare.isAdmin, Category.handleDeleteCategory) 

module.exports = route