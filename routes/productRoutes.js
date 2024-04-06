import express from "express";

import {
  createProduct,
  deleteProduct,
  getNewProducts,
  getPopularProducts,
  getProducts,
  singleProduct,
  udateProduct,
} from "../controllers/productController.js";

const router = express.Router();

router.get("/getProducts", getProducts);

router.get("/getProducts/popular", getPopularProducts);

router.get("/getProducts/new", getNewProducts);

router.get("/:id", singleProduct);

router.post("/createProduct", createProduct);

router.put("/update/:id", udateProduct);

router.delete("/:id", deleteProduct);

export default router;
