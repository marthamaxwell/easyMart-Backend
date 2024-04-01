import express from "express";
import {
  allCategories,
  createCategories,
} from "../controllers/categoryControllers.js";

const router = express.Router();

router.get("/allcat", allCategories);

router.post("/allcat", createCategories);

// router.post("/allcat", createCategory);

export default router;
