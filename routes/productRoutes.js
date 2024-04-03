import express from "express";

import {
  createProduct,
  getNewProducts,
  getPopularProducts,
  getProducts,
} from "../controllers/productController.js";

const router = express.Router();

router.get("/getProducts", getProducts);

router.get("/getProducts/popular", getPopularProducts);

router.get("/getProducts/new", getNewProducts);

router.post("/createProduct", createProduct);

export default router;
