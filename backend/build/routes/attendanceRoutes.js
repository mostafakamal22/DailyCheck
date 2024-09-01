"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var multer_1 = __importDefault(require("multer"));
var attendanceController_1 = require("../controllers/attendanceController");
var router = (0, express_1.Router)();
var upload = (0, multer_1.default)();
router.post("/attendance", upload.single("image"), attendanceController_1.submitAttendance);
exports.default = router;
