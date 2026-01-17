import { StatusCodes } from "http-status-codes";
import AppError from "@/utils/AppError.js";
import catchAsync from "@/utils/catchAsync.js";

const checkUserRole = (requiredRole) =>
  catchAsync(async (req, res, next) => {
    if (req.user && requiredRole === req.user.role) {
      return next();
    } else {
      throw new AppError(
        "Access denied. Insufficient permissions.",
        StatusCodes.FORBIDDEN
      );
    }
  });

export default checkUserRole;
