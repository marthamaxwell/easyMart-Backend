import express from "express";

import {
  createProduct,
  deleteProduct,
  getNewProducts,
  getPopularProducts,
  getProducts,
  udateProduct,
} from "../controllers/productController.js";

const router = express.Router();

router.get("/getProducts", getProducts);

router.get("/getProducts/popular", getPopularProducts);

router.get("/getProducts/new", getNewProducts);

router.post("/createProduct", createProduct);

router.put("/updateProduct", udateProduct);

router.delete("/deleteProduct", deleteProduct);

export default router;
