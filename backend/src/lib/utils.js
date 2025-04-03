import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
export const generateToken = (userId, res) => {
  console.log("JWT_SECRET:", process.env.JWT_SECRET);
  const token = jwt.sign({ userId }, "f1127461a78c6b25ed64b823a23f9250979da2b1ec26161e7c0ce28108a03565", {
    expiresIn: "7d",
  });
  


  res.cookie("jwt", token, {
    maxAge: 7 * 24 * 60 * 60 * 1000, // MS
    httpOnly: true, // prevent XSS attacks cross-site scripting attacks
    sameSite: "strict", // CSRF attacks cross-site request forgery attacks
   
  });

  return token;
};
