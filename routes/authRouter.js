import { Router } from "express";
const router = Router();
import { login, logout, register } from "../controllers/authController.js";
import rateLimiter from "express-rate-limit";
import {
  validateLoginInput,
  validateRegisterInput,
} from "../middleware/ValidationMiddleware.js";

const apiLimiter = rateLimiter({
  windowMs: 15 * 60 * 1000,
  max: 10,
  message: { msg: "IP rate limit exceeded,retry in 15 minutes" },
});

router.post("/register", apiLimiter, validateRegisterInput, register);
router.post("/login", apiLimiter, validateLoginInput, login);
router.get("/logout", logout);

export default router;
