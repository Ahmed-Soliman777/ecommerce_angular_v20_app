const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
    description: { type: String },
    shortDescription: { type: String },
    purshasePrice: { type: Number, required: true },
    sellingPrice: { type: Number, required: true },
    discount: { type: Number, required: false },
    images: { type: [String] },
    categoryId: { type: mongoose.Schema.Types.ObjectId, ref: "categories" },
    brandId: { type: mongoose.Schema.Types.ObjectId, ref: "brand" },
    isFeature: Boolean,
    isNew: Boolean
}, { timestamps: true });
const Product = mongoose.model("products", productSchema);
module.exports = Product;