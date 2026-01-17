import cloudinary from "cloudinary";
import { StatusCodes } from "http-status-codes";
import { uploadToCloudinary } from "@/config/cloudinary.js";
import productModel from "@/models/product.model.js";
import AppError from "@/utils/AppError.js";
import catchAsync from "@/utils/catchAsync.js";

// function for add product
export const add = catchAsync(async (req, res) => {
  const { name, description, price, category, subCategory, size, bestSeller } =
    req.body;

  if (
    !name ||
    !description ||
    !price ||
    !category ||
    !subCategory ||
    !size ||
    !bestSeller
  ) {
    throw new AppError("All Inputs are required", StatusCodes.BAD_REQUEST);
  }

  if (!req.files || Object.keys(req.files).length === 0) {
    throw new AppError("No image uploaded", StatusCodes.BAD_REQUEST);
  }

  // Convert req.files object → array of files
  const filesArray = Object.values(req.files).flat();

  // Upload all images to Cloudinary
  const uploadPromise = filesArray.map((file) =>
    uploadToCloudinary(file.buffer)
  );

  const uploadResult = await Promise.all(uploadPromise);

  // Extract secure URLs
  const images = uploadResult.map((result) => ({
    url: result.secure_url,
    publicId: result.public_id,
  }));

  const productData = {
    name,
    description,
    category,
    price: Number(price),
    subCategory,
    bestSeller: bestSeller === "true",
    size: JSON.parse(size),
    images,
    userId: req.user.id,
  };

  const product = new productModel(productData);
  await product.save();

  res.status(StatusCodes.CREATED).json({ message: "Product added", product });
});

// function for list product
export const list = catchAsync(async (req, res) => {
  const products = await productModel.find({});
  res.json({ products });
});

// function for remove product
export const remove = catchAsync(async (req, res) => {
  const { productIds  } = req.body;

  if (!productIds  || !Array.isArray(productIds )) {
    throw new AppError("Have to send array of productIds.");
  }

  const products = await productModel.find({_id: {$in: productIds}});

  if (products.length === 0) {
    throw new AppError("No product found!");
  }

  // collect all public_id
  const publicIds = products.flatMap(product => product.images.map(img => img.publicId));

  // first delete products from db
  const result = await productModel.deleteMany({_id: {$in: productIds}});

  // now delete images from cloudinary 
  if (publicIds.length > 0) {
    await cloudinary.api.delete_resources(publicIds);
  }

  res.json({message: `${result.deletedCount} document deleted.`})
});

// function for single product info
export const single = catchAsync(async (req, res) => {
  const {productId } = req.params;

  const product = await productModel.findById(productId);

  if (!product) {
    throw new AppError("No product found!");
  }

  res.json({product})
});
