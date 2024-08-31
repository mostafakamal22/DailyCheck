import { Schema, model, Document } from "mongoose";

export interface IAttendance extends Document {
  employeeId: string;
  date: Date;
  attendanceImage: string;
  dismissalImage: string;
  location: {
    latitude: number;
    longitude: number;
  };
}

const attendanceSchema = new Schema<IAttendance>({
  employeeId: { type: String, required: true },
  date: { type: Date, required: true },
  attendanceImage: { type: String, required: true },
  dismissalImage: { type: String, required: false },
  location: {
    latitude: { type: Number, required: true },
    longitude: { type: Number, required: true },
  },
});

const Attendance = model<IAttendance>("Attendance", attendanceSchema);

export default Attendance;
