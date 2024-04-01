import mongoose from "mongoose";

const productSchema = mongoose.Schema({
  title: {
    type: String,
    required: [true, "please enter a product title"],
    unique: true,
  },

  price: {
    type: Number,
    required: [true, "please enter a product price"],
  },

  image: {
    type: String,
    required: [true, "add a product image"],
  },

  rating: {
    type: Number,
    required: true,
    default: 0,
  },
  category: {
    type: String,
    required: true,
  },

  description: {
    type: String,
    required: [true, "Please enter the product description"],
  },

  stock: {
    type: Number,
    default: 1,
  },
});

const Product = mongoose.model("product", productSchema);
export default Product;
