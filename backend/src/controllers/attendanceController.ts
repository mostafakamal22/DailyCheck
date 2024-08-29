import { Request, Response } from "express";
import Attendance from "../models/attendanceModel";
import { uploadFile } from "../services/s3Service";

export const submitAttendance = async (req: Request, res: Response) => {
  try {
    const { employeeId, latitude, longitude } = req.body;
    const attendanceImage = req.file;

    if (!attendanceImage) {
      return res.status(400).send("No file uploaded.");
    }

    const imageUrl = await uploadFile(
      attendanceImage.buffer,
      `attendance/${employeeId}/${Date.now()}.jpg`,
      attendanceImage.mimetype
    );

    const attendance = new Attendance({
      employeeId,
      date: new Date(),
      attendanceImage: imageUrl.Location,
      location: { latitude, longitude },
    });

    await attendance.save();
    res.status(200).json({ message: "Attendance recorded successfully." });
  } catch (error) {
    res.status(500).send(`Error: ${(error as Error).message}`);
  }
};
