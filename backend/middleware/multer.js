import multer from "multer";
import AppError from "@/utils/AppError.js";


const storage = multer.memoryStorage();

const upload = multer({ storage , fileFilter(req, file, cb) {
    if (file.mimetype.startsWith('image')) {
        cb(null, true);
    } else {
        cb(new AppError("Only images allowed"), false)
    }
}});

export const uploadMultiple = upload.fields([
  { name: "image1", maxCount: 1 },
  { name: "image2", maxCount: 1 },
  { name: "image3", maxCount: 1 },
  { name: "image4", maxCount: 1 },
]);

export default upload;
