import express from "express";

import {
  createProduct,
  getCategories,
  getProducts,
} from "../controllers/productController.js";

const router = express.Router();

router.get("/getProducts", getProducts);

router.post("/createProduct", createProduct);

export default router;
