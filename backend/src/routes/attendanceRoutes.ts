import { Router } from "express";
import multer from "multer";
import { submitAttendance } from "../controllers/attendanceController";

const router = Router();
const upload = multer();

router.post("/attendance", upload.single("image"), submitAttendance);

export default router;
