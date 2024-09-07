import { Request, Response } from "express";
const { validationResult } = require("express-validator");
import jwt from "jsonwebtoken";
import Employee from "../models/Employee";
import bcrypt from "bcryptjs";

export const register = async (req: Request, res: Response) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const {
    employeeID,
    fullName,
    phoneNumber,
    email,
    profilePicUrl,
    password,
    role,
  } = req.body;

  try {
    let user = await Employee.findOne({ email });

    if (user) {
      return res.status(400).json({ msg: "User already exists" });
    }

    user = new Employee({
      employeeID,
      fullName,
      phoneNumber,
      email,
      profilePicUrl,
      password,
      role,
    });

    await user.save();

    const payload = {
      user: {
        id: user.id,
        role: user.role,
      },
    };

    jwt.sign(
      payload,
      process.env.JWT_SECRET as string,
      { expiresIn: "5h" },
      (err, token) => {
        if (err) throw err;
        res.json({ token });
      }
    );
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};

export const login = async (req: Request, res: Response) => {
  const { id, password } = req.body;

  const employee = await Employee.findOne({ id });
  if (!employee) return res.status(404).json({ error: "Employee not found" });

  const isMatch = await bcrypt.compare(password, employee.password);
  if (!isMatch) return res.status(400).json({ error: "Invalid credentials" });

  const token = jwt.sign({ id: employee.id }, process.env.JWT_SECRET!, {
    expiresIn: "1h",
  });
  return res.json({ token });
};
