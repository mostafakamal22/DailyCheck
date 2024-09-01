"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var attendanceSchema = new mongoose_1.Schema({
    employeeId: { type: String, required: true },
    date: { type: Date, required: true },
    attendanceImage: { type: String, required: true },
    dismissalImage: { type: String, required: false },
    location: {
        latitude: { type: Number, required: true },
        longitude: { type: Number, required: true },
    },
});
var Attendance = (0, mongoose_1.model)("Attendance", attendanceSchema);
exports.default = Attendance;
