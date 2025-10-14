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

async function handleGetCart(userId, productId) {
    const product = await Cart.find({ userId: userId }).populate('productId')
    return product.map(x => x.productId)
}