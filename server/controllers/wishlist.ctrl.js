const wishlist = require('../models/wishlist.modle')

async function getWishlist(req, res) {
    try {
        const getWishlist = await wishlist.find()
        res.status(200).json(getWishlist)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}
async function getWishlistById(req, res) {
    try {
        const { id } = req.params
        if (!id) {
            res.status(400).json({ message: "Wishlist not found" })
        }
        const getWishlist = await wishlist.findById(id)
        res.status(200).json(getWishlist)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}
async function addWishlist(req, res) {
    try {
        const { userId, productId } = req.body
        if (!userId || !productId) {
            res.status(400).json({ message: "Invalid user or product ID" })
        }
        const getWishlist = await wishlist.create({ userId, productId })
        res.status(200).json({ message: "Wishlist added successfully", getWishlist })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

async function deleteWishlist(req, res) {
    try {
        const { id } = req.params
        if (!id) {
            res.status(400).json({ message: "Invalid product ID" })
        }
        const getWishlist = await wishlist.findByIdAndDelete(id)
        res.status(200).json({ message: "Wishlist deleted successfully" })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

module.exports = { getWishlist, getWishlistById, addWishlist, deleteWishlist }