import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    description: String,
    price: {type: Number, required: true},
      images: [
      {
        url: { type: String, required: true },
        publicId: { type: String, required: true },
      },
    ],
    category: {type: String, required: true},
    subCategory: {type: String, required: true}, 
    size: {type: Array, required: true},
    bestseller: {type: Boolean},
    userId: {type: mongoose.Schema.Types.ObjectId, ref: "User", required: true}
  },
  { timestamps: true }
);

export default mongoose.models.Product || mongoose.model("Product", productSchema)
