import { Router } from "express";
import * as authController from "@/controllers/auth.controller.js";
import { loginSchema, signupSchema } from "@/validators/user.validator.js";
import validate from "@/middleware/validate.js";


const router = Router();

router.post("/signup", validate(signupSchema), authController.signUp);
router.post("/login", validate(loginSchema), authController.login);

export default router;