const express = require('express')
const route = express()

const Category = require('../controllers/category.ctrl')

route.get('/category', Category.handleGetCategories)

route.get('/category/:id', Category.handleGetCategoryById)

route.post('/category', Category.handleAddCategory)

route.put('/category/:id', Category.handleUpdateCategory)

route.delete('/category/:id', Category.handleDeleteCategory) 

module.exports = route