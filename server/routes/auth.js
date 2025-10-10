const express = require('express')
const route = express()

const userAuth = require('../controllers/auth.ctrl')

route.post('/register', userAuth.handleRegiterUser)
route.post('/login', userAuth.handleLoginUser)

module.exports = route