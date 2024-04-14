import express from "express";

import {
  createProduct,
  deleteProduct,
  getNewProducts,
  getPopularProducts,
  getProducts,
  getSpeacialOfferProducts,
  singleProduct,
  udateProduct,
} from "../controllers/productController.js";

const router = express.Router();

router.get("/getProducts", getProducts);

router.get("/popular", getPopularProducts);

router.get("/offer", getSpeacialOfferProducts);

router.get("/new", getNewProducts);

router.get("/singleProduct/:id", singleProduct);

router.post("/createProduct", createProduct);

router.put("/update/:id", udateProduct);

router.delete("/delete/:id", deleteProduct);

export default router;
