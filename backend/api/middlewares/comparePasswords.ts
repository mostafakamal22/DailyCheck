import { NextFunction, Request, Response } from "express";

//check password === entered password
//@useCase:- when admin updating his info
export const comparePasswords = (
  req: Request,
  _res: Response,
  next: NextFunction
) => {
  const { password, enteredPassword } = req.body;

  if (password !== enteredPassword) {
    throw new Error("Password and Entered Password Do NOT match");
  } else {
    next();
  }
};
