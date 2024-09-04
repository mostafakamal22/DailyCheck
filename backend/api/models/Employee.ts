import mongoose, { Schema, Document, Model } from "mongoose";
import bcrypt from "bcryptjs";

export interface IEmployee extends Document {
  employeeID: string;
  fullName: string;
  phoneNumber: string;
  email: string;
  profilePicUrl: string;
  password: string;
  role: "employee" | "moderator";
  matchPassword: (enteredPassword: string) => Promise<boolean>;
}

const EmployeeSchema: Schema = new Schema({
  employeeID: { type: String, required: true, unique: true },
  fullName: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  email: { type: String, required: true },
  profilePicUrl: { type: String, required: true },
  password: { type: String, required: true },
  role: { type: String, enum: ["employee", "moderator"], required: true },
});

// Hash password before saving
EmployeeSchema.pre<IEmployee>("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

// Match password
EmployeeSchema.methods.matchPassword = async function (
  enteredPassword: string
): Promise<boolean> {
  return await bcrypt.compare(enteredPassword, this.password);
};

const Employee: Model<IEmployee> = mongoose.model<IEmployee>(
  "Employee",
  EmployeeSchema
);

export default Employee;
