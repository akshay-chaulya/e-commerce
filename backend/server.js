import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import authRouter from "./routes/auth.route.js";
import connectDB from "./config/mongodb.js";
import cookieParser from "cookie-parser";
import connectCloudinary from "./config/cloudinary.js";
import { StatusCodes } from "http-status-codes";
import errorHandler from "./middleware/errorHandler.js";
import productRouter from "./routes/product.route.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
connectCloudinary();

// For allowing browser
app.use(cors());
// For accessing request body
app.use(express.json());
// for parsing application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true })); 
// For accessing and modifying the cookie
app.use(cookieParser());

// Testing route
app.get("/", (_, res) => {
  res.send("Sever is running");
});

// All routes
app.use("/api/auth", authRouter);
app.use("/api/product", productRouter)

// 404 page not found error 
app.use((req, res, next) => {
  res.status(StatusCodes.NOT_FOUND).json({
    message: `Can't find ${req.originalUrl} on this server!`,
    status: "fail"
  })
})

// Global error handling middleware 
app.use(errorHandler);

// Server listening after database connection is done
connectDB().then(() =>
  app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
  })
);
