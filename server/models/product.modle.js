const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
    description: { type: String },
    shortDescription: { type: String },
    purshasePrice: { type: Number, required: true },
    sellingPrice: { type: Number, required: true },
    images: { type: [String] },
    categoryId: { type: mongoose.Schema.Types.ObjectId, ref: "categories" },
}, { timestamps: true });
const Product = mongoose.model("products", productSchema);
module.exports = Product;