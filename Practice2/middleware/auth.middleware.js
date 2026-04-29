import jwt from "jsonwebtoken";

const SECRET = process.env.MY_SECRET;

export const verifyToken = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ message: "No token" });
  }

  try {
    const token = authHeader.split(" ")[1];

    const decoded = jwt.verify(token, SECRET);
    req.user = decoded;

    next();
  } catch {
    res.status(401).json({ message: "Invalid token" });
  }
};

export const isAdmin = (req, res, next) => {
  if (req.user.role !== "admin") {
    return res.status(403).json({ message: "Only admin allowed" });
  }
  next();
};

export const isUser = (req,res,next)=>{
  if(req.user.role !== "user"){
    return res.status(403).json({message:"Only User Allowed"})
  }

  next();
}