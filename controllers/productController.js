import Product from "../models/productModel.js";

//get all products
const getProducts = async (req, res) => {
  try {
    const product = await Product.find({});
    res.status(200).json({
      success: true,
      message: "All Products",
      getProducts: product,
      ProductLength: product.length,
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

//get a single product
const singleProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);
    res.status(200).json({
      success: true,
      message: "product found",
      product: product,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Product not found",
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
      message: "popular products found",
      product: popularProducts,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Popular Products Not found",
      error: error.message,
    });
  }
};

const getSpeacialOfferProducts = async (req, res) => {
  try {
    const specialOfferProducts = await Product.find({ specialOffer: true });

    res.status(200).json({
      success: true,
      message: "special offer products found",
      product: specialOfferProducts,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "special offer products not found",
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
      message: "New Products not found",
      error: error.message,
    });
  }
};

export {
  getProducts,
  createProduct,
  getPopularProducts,
  getNewProducts,
  getSpeacialOfferProducts,
  udateProduct,
  deleteProduct,
  singleProduct,
};
