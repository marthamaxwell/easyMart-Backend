import Product from "../models/productModel.js";

const getProducts = async (req, res) => {
  try {
    const product = await Product.find({});
    res.status(200).json({
      success: true,
      message: "Popular Products",
      getProducts: product,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Products not fetched",
      error: error.message,
    });
  }
};


const createProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(201).json({
      success: true,
      message: "Product Created Successfully",
      product: product,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Product not created",
      error: error.message,
    });
  }
};

export { getProducts, createProduct, getCategories };
