import mongoose from "mongoose";

const cartSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    data: {
      type: Object,
      default: {},
    },
  },
  { timestamp: true }
);

export default mongoose.models.Cart || mongoose.model("Cart", cartSchema);
