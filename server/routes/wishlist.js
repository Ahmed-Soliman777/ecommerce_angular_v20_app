const express = require('express')
const route = express()

const middleware = require('../middleware/auth.middleware')
const wishlistCtrl = require('../controllers/wishlist.ctrl')

route.get('/wishlist', middleware.authenticate, wishlistCtrl.getWishlist)
route.get('/wishlist/:id', middleware.authenticate, wishlistCtrl.getWishlistById)
route.post('/wishlist', middleware.authenticate, wishlistCtrl.addWishlist)
route.delete('/wishlist/:id', middleware.authenticate, wishlistCtrl.deleteWishlist)

module.exports = route