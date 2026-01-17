import jwt from "jsonwebtoken";

export const getToken = (data) => {
  return jwt.sign(data, process.env.JWT_TOKEN, {
    expiresIn: "1h",
  });
};

export const verifyToken = (token) => {
  try {
    return jwt.verify(token, process.env.JWT_TOKEN);
  } catch (error) {
    throw new Error("Invalid or expired token");
  }
};
