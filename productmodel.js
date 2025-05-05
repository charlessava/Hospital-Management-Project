const mongoose = require("mongoose")

const productSchema = new mongoose.Schema({
    name: { type: string, require: true },
    price: { type: Number, require: true },
    instock: { type: Boolean, default: false }
}, { timestamps: true })


const Product = new mongoose.model("Product", productSchema);


module.exports = Product


