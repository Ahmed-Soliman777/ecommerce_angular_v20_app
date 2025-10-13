const wishlist = require('../models/wishlist.modle')

async function getWishlist(req, res) {
    try {
        const wishlists = await wishlist.find({ userId: req.user.id })
            .populate("productId")
            .sort({ createdAt: -1 });
        res.status(200).json(wishlists)
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
        const getWishlist = await wishlist.findById(id).populate("productId");
        res.status(200).json(getWishlist)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}
async function addWishlist(req, res) {
    try {
        const userId = req.user.id;
        const { productId } = req.body
        if (!userId || !productId) {
            res.status(400).json({ message: "Invalid user or product ID" })
        }
        const existing = await wishlist.findOne({ userId, productId });
        if (existing) {
            return res.status(400).json({ message: "Product already in wishlist" });
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
        const deleteItem = await wishlist.findByIdAndDelete(id)
        if (!deleteItem) {
            return res.status(404).json({ message: "Wishlist not found" });
        }
        res.status(200).json({ message: "Wishlist deleted successfully" })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

module.exports = { getWishlist, getWishlistById, addWishlist, deleteWishlist }