import { StatusCodes } from "http-status-codes";
import { verifyToken } from "@/utils/jwt.js";
import User from "@/models/user.model.js";

const useAuth = async (req, res, next) => {
  try {
    let token = req.cookies["token"] || req.headers["authorization"];
    
    if (!token || !token.startsWith("Bearer "))
      return res
        .status(StatusCodes.UNAUTHORIZED)
        .json({ message: "UNAUTHORIZED: No token found or invalid format" });

    token = token.split(" ")[1];

    const decode = verifyToken(token);
    const user = await User.findOne({ email: decode?.email || "" }).select(
      "-password"
    );
    if (!decode || !user)
      return res
        .status(StatusCodes.UNAUTHORIZED)
        .json({ message: "UNAUTHORIZED: Invalid token or expired" });

    req.user = user;
    next();
  } catch (error) {
    console.log("Error in auth middleware " + error);
    throw error;
  }
};

export default useAuth;
