import { Router } from "express";
import * as productController from "@/controllers/product.controller.js";
import useAuth from "@/middleware/authMiddleware.js";
import { uploadMultiple } from "@/middleware/multer.js";
import checkUserRole from "@/middleware/checkUserRole.js";
// import { productSchema } from "@/validators/product.validator.js";

const router = Router();

router.post(
  "/add",
  useAuth,
  checkUserRole("admin"),
  uploadMultiple,
  productController.add
);
router.post("/remove", checkUserRole("admin"), productController.remove);
router.get("/single/:productId", productController.single);
router.get("/list", productController.list);

export default router;
