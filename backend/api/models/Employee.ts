import mongoose, {
  Schema,
  Document,
  Model,
  SchemaTimestampsConfig,
  PaginateModel,
} from "mongoose";
import bcrypt from "bcryptjs";

import paginate from "mongoose-paginate-v2";
import { autoIncrement } from "mongoose-plugin-autoinc";

export interface IEmployee extends Document {
  fullName: string;
  phoneNumber: string;
  email: string;
  profilePicUrl: string;
  password: string;
  role: "employee" | "moderator";
  matchPassword: (enteredPassword: string) => Promise<boolean>;
}

const EmployeeSchema: Schema = new Schema<IEmployee>(
  {
    fullName: { type: String, required: [true, "Please Type FullName!"] },
    phoneNumber: {
      type: String,
      required: [true, "Please Type a Phone number!"],
    },
    email: {
      type: String,
      required: [true, "Please Type An Email!"],
      unique: true,
      validate: {
        validator: function (v: string) {
          let regex = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");
          return regex.test(v);
        },
        message: "Please Enter A Valid Email!",
      },
    },
    profilePicUrl: { type: String },
    password: {
      type: String,
      required: [true, "Please Type A Password!"],
    },
    role: {
      type: String,
      required: [true, "Please Set The Admin Role!"],
      enum: {
        values: ["employee", "moderator"],
        message: "{VALUE} is not supported as a Role",
      },
    },
  },
  { timestamps: true, collection: "Employees" }
);

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
  const isPasswordRight = await bcrypt.compare(enteredPassword, this.password);
  return isPasswordRight;
};

//Paginate with plugin.
EmployeeSchema.plugin(paginate);

//Auto Increament Bill Number Plugin
EmployeeSchema.plugin(autoIncrement, {
  model: "Employee",
  field: "ID",
  startAt: 1,
  incrementBy: 1,
});

//Declare a mongoose document based on a Typescript interface representing Employee schema.
export interface IEmployeeDocument
  extends Document,
    IEmployee,
    SchemaTimestampsConfig {
  ID: number;
}

//Define Employee Model
const Employee: Model<IEmployeeDocument> = mongoose.model<
  IEmployeeDocument,
  PaginateModel<IEmployeeDocument>
>("Employee", EmployeeSchema);

export default Employee;
