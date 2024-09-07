import { Router } from "express";
import multer from "multer";
import { checkIn, checkOut } from "../controllers/attendanceController";

const router = Router();
const upload = multer();

router.post("/check-in", upload.single("faceImage"), checkIn);
router.post("/check-out", upload.single("faceImage"), checkOut);

export default router;
