import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
  const token = req.header("Authorization");
  // check if the token is present
  if (!token) {
    return res.status(401).json({ error: "Unauthorized: Token not provided" });
  }

  try {
    //  verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    // attach the decoded user information to the request object for later use
    req.user = decoded.user;
    next();
  } catch (error) {
    console.error("Error verifying token: ", error);
    res.status(401).json({ error: "Unauthorized: Invalid Token" });
  }
};
