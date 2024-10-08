import bycrpt from "bcryptjs";
import { NextFunction, Request, Response } from "express";

//check password that comes from request is the password that being saved into database.
//@useCase:- when user updating his info
export const checkPassword = async (
  req: Request,
  _res: Response,
  next: NextFunction
) => {
  //get user
  const { user } = req;

  //compare password
  const isPassword = await bycrpt.compare(req.body.oldPassword, user.password);

  if (isPassword) {
    //okay right password
    next();
  } else {
    throw new Error("Wrong old password");
  }
};
