import { StatusCodes } from "http-status-codes";
import { ZodError } from "zod";
import AppError from "@/utils/AppError.js";

const validate = (schema) => (req, res, next) => {
  try {
    req.body = schema.parse(req.body || {});
    next();
  } catch (error) {
    if (error instanceof ZodError) {
      const message = error.issues
        .map((err) => err.message)
        .join(", ");
      return next(new AppError(message, StatusCodes.BAD_REQUEST));
    }
    
    console.error(error);
    return next(new AppError("Validation failed", StatusCodes.INTERNAL_SERVER_ERROR));
  }
};

export default validate;