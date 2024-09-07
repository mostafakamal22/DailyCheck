// controllers/moderatorController.ts
import { Request, Response } from "express";
import Attendance from "../models/Attendance";

// GET /moderator/attendance-records
export const getAttendances = async (req: Request, res: Response) => {
  try {
    const { page = 1, limit = 10 } = req.query;

    // Paginate attendance records
    const attendances = await Attendance.find()
      .skip((+page - 1) * +limit)
      .limit(+limit);

    const totalRecords = await Attendance.countDocuments();

    res.json({
      data: attendances,
      currentPage: +page,
      totalPages: Math.ceil(totalRecords / +limit),
    });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};
