const Order = require('../models/orders.modle')
const { handleClearCart } = require('./cart.ctrl')

async function handleAddOrder(userId, orderModel) {
    let order = new Order({
        ...orderModel,
        userId: userId,
        status: "in progress"
    })
    await order.save()
}

async function getCustomerOrders(userId) {
    let orders = await Order.find({ userId: userId })
    return orders.map((x) => x.toObject())
}

async function getAdmonOrders(userId) {
    let orders = await Order.find()
    return orders.map((x) => x.toObject())
}

async function addOrders(req, res) {
    try {
        const userId = req.user.id
        const order = req.body
        await handleAddOrder(userId, order)
        await handleClearCart(userId)
        res.status(200).json({ message: "order created successfully" })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

async function getOrders(req, res) {
    try {
        const userId = req.user.id
        const orders = await getCustomerOrders(userId)
        res.status(200).json(orders)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

async function getAllOrders(req, res) {
    try {
        const orders = await getCustomerOrders()
        res.status(200).json(orders)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

module.exports = { addOrders, getCustomerOrders, getOrders, getAllOrders }