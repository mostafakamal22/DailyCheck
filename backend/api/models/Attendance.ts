import mongoose, { Schema, Document, Model } from "mongoose";

export interface IAttendance extends Document {
  employeeID: string;
  facePicUrl: string;
  time: Date;
  location: {
    latitude: number;
    longitude: number;
  };
}

const AttendanceSchema: Schema = new Schema({
  employeeID: { type: String, required: true },
  facePicUrl: { type: String, required: true },
  time: { type: Date, required: true },
  location: {
    latitude: { type: Number, required: true },
    longitude: { type: Number, required: true },
  },
});

const Attendance: Model<IAttendance> = mongoose.model<IAttendance>(
  "Attendance",
  AttendanceSchema
);

export default Attendance;
