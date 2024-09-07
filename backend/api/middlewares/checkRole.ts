import { NextFunction, Request, Response } from "express";

//check user role (Employee or moderator).
//@UseCase:- when an user make request, and only moderators are allowed to make that request.
export const checkRole = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  //check for invalid user token
  if (!req.user.role) {
    return res.status(403).send("Not Authorized for users");
  }

  const { role } = req.user;
  //moderators only allowed to continue...
  if (role === "moderator") return next();
  //users are not allowed
  return res.status(401).send("Not Authorized moderator only");
};
