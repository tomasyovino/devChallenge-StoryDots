import mongoose from "mongoose";

const productSchema = mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    image_url: { type: String, required: true },
    price: { type: Number, required: true}
}, { timestamps: true });

export const ProductModel = mongoose.model("Product", productSchema);