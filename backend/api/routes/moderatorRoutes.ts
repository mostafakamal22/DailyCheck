// routes/moderatorRoutes.ts
import express from "express";
import { getAttendances } from "../controllers/moderatorController";

const router = express.Router();

router.get("/attendance-records", getAttendances);

export default router;
