import jwt from "jsonwebtoken";
export const verifyToken = async (req, res, next) => {
  const token = req.headers["authorization"];
  if (!token) {
    res.status(401).json({ message: "Unauthorized - token not provided" });
  }
  try {
    const decoded = await jwt.verify(token, process.env.JWT_SECRET_KEY);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(403).json({ message: "Forbidden - Invalid Token" });
  }
};
