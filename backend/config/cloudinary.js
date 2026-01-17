import { v2 as cloudinary } from "cloudinary";
import AppError from "@/utils/AppError.js";

const connectCloudinary = async () => {
  try {
    cloudinary.config({
      cloud_name: process.env.CLOUDINARY_NAME,
      api_key: process.env.CLOUDINARY_API_KEY,
      api_secret: process.env.CLOUDINARY_API_SECRET,
      secure: true,
    });
  } catch (error) {
    console.log("Error to connect cloudinary " + error);
  }
};

export const uploadToCloudinary = (buffer, folder = "e-commerce/products") => {
  return new Promise((resolve, reject) => {
    cloudinary.uploader
      .upload_stream({ folder }, (error, result) => {
        if (error) reject(error);
        else resolve(result);
      })
      .end(buffer);
  });
};

export default connectCloudinary;
