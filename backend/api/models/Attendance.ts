import mongoose, { Schema, Document } from "mongoose";

export interface IAttendanceRecord extends Document {
  employeeId: string;
  type: "check-in" | "check-out";
  faceImageUrl: string;
  location: string;
  timestamp: Date;
}

const AttendanceRecordSchema: Schema = new Schema(
  {
    employeeId: { type: String, required: true },
    type: { type: String, enum: ["check-in", "check-out"], required: true },
    faceImageUrl: { type: String, required: true },
    location: { type: String, required: true },
    timestamp: { type: Date, default: Date.now },
  },
  {
    timestamps: true,
  }
);

const AttendanceRecord = mongoose.model<IAttendanceRecord>(
  "AttendanceRecord",
  AttendanceRecordSchema
);
export default AttendanceRecord;
