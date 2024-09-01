import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import attendanceRoutes from "./routes/attendanceRoutes";
import { connectToMongoose } from "./config/dbConfig";

dotenv.config();

const app = express();
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use("/api", attendanceRoutes);

const PORT = process.env.PORT || 5000;
const HOST = process.env.LOCAL_HOST;

//Connect to mongodb
connectToMongoose().then(() => {
  app.listen(+PORT, HOST, () => {
    console.log(`Server is running on http://${HOST}:${PORT}`);
  });
});
