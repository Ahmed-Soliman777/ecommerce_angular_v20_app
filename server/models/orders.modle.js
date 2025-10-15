const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
    date: { type: Date, default: Date.now },
    items: Array(mongoose.Schema.Types.Mixed),
    paymentType: { type: String },
    address: mongoose.Schema.Types.Mixed,
    status: { type: Number },
}, { timestamps: true });
const Order = mongoose.model("orders", orderSchema);
module.exports = Order;