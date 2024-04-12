import express from "express";
import {
  register,
  login,
  validateToken,
} from "../controllers/userController.js";
import { checkAndRenewToken } from "../middleware/validateToken.js";

const router = express.Router();

router.post("/register", register);

router.post("/login", login);

router.get("/validateToken", checkAndRenewToken, validateToken);

export default router;
