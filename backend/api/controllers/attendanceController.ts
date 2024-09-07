import { Request, Response } from "express";
import Attendance from "../models/Attendance";
import Employee from "../models/Employee";
import { uploadImageToS3 } from "../services/s3Service";

// POST /attendance/check-in
export const checkIn = async (req: Request, res: Response) => {
  try {
    const { employeeId, faceImage, location } = req.body;

    // Check if employee exists
    const employee = await Employee.findById(employeeId);
    if (!employee) {
      return res.status(404).json({ message: "Employee not found" });
    }

    // Upload face image to S3
    const faceImageUrl = await uploadImageToS3(faceImage, employeeId);

    // Create a new attendance record for check-in
    const attendance = new Attendance({
      employeeId,
      type: "check-in",
      faceImageUrl,
      location,
    });

    await attendance.save();

    res.status(201).json({ message: "Check-in recorded successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

// POST /attendance/check-out
export const checkOut = async (req: Request, res: Response) => {
  try {
    const { employeeId, faceImage, location } = req.body;

    // Check if employee exists
    const employee = await Employee.findById(employeeId);
    if (!employee) {
      return res.status(404).json({ message: "Employee not found" });
    }

    // Upload face image to S3
    const faceImageUrl = await uploadImageToS3(faceImage, employeeId);

    // Create a new attendance record for check-out
    const attendance = new Attendance({
      employeeId,
      type: "check-out",
      faceImageUrl,
      location,
    });

    await attendance.save();

    res.status(201).json({ message: "Check-out recorded successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};
