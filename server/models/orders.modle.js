const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
    date: { type: Date, default: Date.now },
    items: { type: [any] },
    status: { type: Number},
}, { timestamps: true });
const Orders = mongoose.model("orders", orderSchema);
module.exports = Orders;