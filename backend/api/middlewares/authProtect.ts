import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import User from "../models/User";

export interface AccessJwtPayload {
  UserInfo: { id: string; role: string };
}

export interface RefreshJwtPayload {
  id: string;
}

//Check Users Authentication
export const authProtect = async (
  req: Request,
  _res: Response,
  next: NextFunction
) => {
  if (
    req?.headers?.authorization &&
    req?.headers?.authorization.trim().startsWith("Bearer")
  ) {
    //Get Access Token From Header
    const accessToken = req.headers.authorization.split(" ")[1];

    //Verify token
    const decoded = jwt.verify(
      accessToken,
      process.env.ACCESS_TOKEN_SECRET!
    ) as AccessJwtPayload;

    //Get User from Token
    const user = await User.findById(decoded?.UserInfo?.id);

    //IF There is no User With that token Id => Invalid Token
    if (!user) {
      throw new Error("Not Authorized with invalid token");
    }

    //Everything is OK, Pass User Object to next middleware
    req.user = user;
    next();
  } else {
    //IF No Token Provided With The Request
    throw new Error("Not Authorized without token");
  }
};
