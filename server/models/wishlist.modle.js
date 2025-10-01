const mongoose = require("mongoose");

const wishlistSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "users" },
    productId: { type: [string]},
}, { timestamps: true });
const Wishlist = mongoose.model("whishlists", wishlistSchema);
module.exports = Wishlist;