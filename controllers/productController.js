import Product from "../models/productModel.js";

//get all products
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

//create a product
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

//update a product
const udateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedProduct = await Product.findByIdAndUpdate(id, req.body);

    const updateFilled = await Product.findByIdAndUpdate(id);
    res.status(200).json({
      success: true,
      message: "product updated successfully",
      product: updateFilled,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Product not updated",
      error: error.message,
    });
  }
};

//delete  a product
const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndDelete(id);
    res.status(200).json({
      success: true,
      message: "product deleted successfully",
      product: product,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Product not deleted",
      error: error.message,
    });
  }
};

//get all popular products
const getPopularProducts = async (req, res) => {
  try {
    const popularProducts = await Product.find({ popular: true });

    res.status(200).json({
      success: true,
      message: "popular product found",
      product: popularProducts,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Product not created",
      error: error.message,
    });
  }
};

//get all new products
const getNewProducts = async (req, res) => {
  try {
    const newProducts = await Product.find({ newProduct: true });

    res.status(200).json({
      success: true,
      message: "new products found",
      product: newProducts,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Product not found",
      error: error.message,
    });
  }
};

export {
  getProducts,
  createProduct,
  getPopularProducts,
  getNewProducts,
  udateProduct,
  deleteProduct,
};
