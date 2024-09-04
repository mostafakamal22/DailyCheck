import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import Employee, { IEmployee } from "../models/Employee";

interface AuthRequest extends Request {
  user?: IEmployee;
}

export const authMiddleware = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction
) => {
  const token = req.header("x-auth-token");

  if (!token) {
    return res.status(401).json({ msg: "No token, authorization denied" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as any;

    req.user = await Employee.findById(decoded.user.id).select("-password");
    next();
  } catch (err) {
    res.status(401).json({ msg: "Token is not valid" });
  }
};
