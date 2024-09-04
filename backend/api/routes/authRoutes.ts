import { Router } from "express";
import { register, login } from "../controllers/authController";
const { query } = require("express-validator");

const router = Router();

router.post(
  "/auth/register",
  [
    query("email", "Please include a valid email").isEmail(),
    query("password", "Password must be 6 or more characters").isLength({
      min: 6,
    }),
  ],
  register
);

router.post(
  "/auth/login",
  [
    query("email", "Please include a valid email").isEmail(),
    query("password", "Password is required").exists(),
  ],
  login
);

export default router;
