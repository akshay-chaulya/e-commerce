import bcrypt from "bcrypt";
import { StatusCodes } from "http-status-codes";
import userModel from "@/models/user.model.js";
import AppError from "@/utils/AppError.js";
import catchAsync from "@/utils/catchAsync.js";
import * as jwtUtils from "@/utils/jwt.js";

export const signUp = catchAsync(async (req, res) => {
  const { name, email, password } = req.body || {};

  // if (!email || !name || !password) {
  //   throw new AppError("Inputs field required", StatusCodes.BAD_REQUEST);
  // }

  // validating email format & strong password
  // if (!validator.isEmail(email)) {
  //   throw new AppError("Please enter a valid email", StatusCodes.BAD_REQUEST);
  // }

  // if (password.length < 6) {
  //   throw new AppError(
  //     "Please enter a strong password",
  //     StatusCodes.BAD_REQUEST
  //   );
  // }

  const isExist = await userModel.findOne({ email });

  if (isExist)
    throw new AppError("Email already exist", StatusCodes.BAD_REQUEST);

  const hasPassword = await bcrypt.hash(password, 10);
  const user = new userModel({ name, email, password: hasPassword });

  await user.save();

  res
    .status(StatusCodes.CREATED)
    .json({ message: "Account created successfully" });
});

export const login = catchAsync(async (req, res) => {
  const { email, password } = req.body || {};

  // if (!email || !password) {
  //   throw new AppError("Inputs field required", StatusCodes.BAD_REQUEST);
  // }

  const user = await userModel.findOne({ email });

  if (!user) throw new AppError("No account found", StatusCodes.NOT_FOUND);

  const isMatch = await user.comparePassword(password);

  if (!isMatch)
    throw new AppError("Password not match", StatusCodes.BAD_REQUEST);

  const userObj = user.toObject();

  delete userObj.password;

  const token = jwtUtils.getToken(userObj);

  const cookieOptions = {
    maxAge: 1000 * 60 * 60, // Cookie expires after 60 minutes (in milliseconds)
    httpOnly: true, // Makes the cookie inaccessible to client-side JavaScript
    secure: false, // Set to true in production over HTTPS
    sameSite: "lax", // Helps with cross-site request forgery (CSRF)
  };

  res.cookie("token", `Bearer ${token}`, cookieOptions);

  res.json({ message: "Login successfully", user: userObj, token });
});
