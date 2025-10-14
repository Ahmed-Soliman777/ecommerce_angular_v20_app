const Cart = require("../models/cart.modle")

async function handleAddToCart(userId, productId, quantity) {

    let product = await Cart.findOne({ userId: userId, productId: productId })
    if (product) {
        await Cart.findByIdAndUpdate(product._id, {
            quantity: product.quantity + quantity
        })
    } else {
        product = new Cart({ userId: userId, productId: productId, quantity: quantity })
        await product.save()
    }

}

async function handleRemoveFromCart(userId, productId) {
    await Cart.findOneAndDelete({ userId: userId, productId: productId })
}

async function handleGetCart(userId) {
    const product = await Cart.find({ userId: userId }).populate("productId")
    return product.map((x) => {
        return { quantity: x.quantity, product: x.productId }
    })
}

async function getCart(req, res) {
    try {
        const { userId } = req.body
        const items = await handleGetCart(userId)
        res.status(200).json(items)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}


async function addCart(req, res) {
    try {
        const productId = req.params.id // product id
        const userId = req.user._id
        const { quantity } = req.body
        const items = await handleAddToCart(userId, productId, quantity)
        res.status(200).json(items)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

async function removeCart(req, res) {
    try {
        const productId = req.params.id
        const userId = req.user._id
        const items = await handleRemoveFromCart(userId, productId)
        res.status(200).json(items)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

module.exports = { getCart, addCart, removeCart }