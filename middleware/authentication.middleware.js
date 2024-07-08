import jwt from "jsonwebtoken";

export default async function isAuth(req, res, next) {
  try {
    if (!req.header.authorization) {
      return res.status(401).json({ message: "No token provided in headers" });
    }

    const token = req.headers.authorization.split(" ")[1];

    if (!token) {
      return res
        .status(401)
        .json({ message: "no token provided after bearer" });
    }

    const verified = jwt.verify(token, process.env.SECRET_TOKEN);

    req.user = verified.payload;

    next();
  } catch (error) {
    console.log("Error inside auth middleware", error);

    if (error.message === "jwt malformed") {
      return res.status(401).json({ message: "no token provided (malformed" });
    }
    
    res.status(401).json({ message: "no token provided nor valid" });
  }
}
