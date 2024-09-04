import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import dotenv from "dotenv";
import User from "../models/User";

dotenv.config();

const seedUsers = async () => {
  await mongoose.connect(process.env.MONGO_URI as string);

  const users = [
    {
      name: "Moderator",
      email: "moderator@example.com",
      password: await bcrypt.hash("password123", 10),
      role: "moderator",
    },
    {
      name: "Employee",
      email: "employee@example.com",
      password: await bcrypt.hash("password123", 10),
      role: "employee",
    },
  ];

  await User.deleteMany({});
  await User.insertMany(users);

  console.log("Users seeded");
  mongoose.disconnect();
};

seedUsers().catch((err) => console.log(err));
