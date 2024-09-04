import { IEmployee } from "../models/Employee";
import Employee from "../models/Employee";
import { Request, Response } from "express";

export const createEmployee = async (req: Request, res: Response) => {
  const { employeeID, fullName, phoneNumber, email, profilePicUrl, password } =
    req.body;

  try {
    const employee: IEmployee = new Employee({
      employeeID,
      fullName,
      phoneNumber,
      email,
      profilePicUrl,
      password,
    });

    await employee.save();
    res.status(201).json(employee);
  } catch (error) {
    res.status(500).json({ error: "Failed to create employee" });
  }
};
