import dotenv from "dotenv";
dotenv.config();

import { connectToMongoose } from "./config/dbConfig";
import express from "express";

const app = express();

//Enable Express to trust the headers set by the reverse proxy (e.g., Nginx, Apache).
app.set("trust proxy", true);

//Middlewares
//Express json parser middleware
app.use(express.json());

//Cors middleware
// if (process.env.NODE_ENV === "production") {
//   app.use(cors(corsProOptions));
// } else {
//   app.use(cors(corsDevOptions));
// }

//Middleware for cookies
// app.use(cookieParser());

//Welcome Route
app.get("/", (_req, res) => {
  res.send("DailyCheck API is running...");
});

//Users Router && Error Handler && API Limiter For Users Requests.
// import usersRoute from "./routes/userRoutes";
// app.use("/api/users", userApiLimiter, usersRoute, userErrorHandler);

const PORT = process.env.PORT || 5000;
const HOST = process.env.LOCAL_HOST;

//Connect to mongodb
connectToMongoose()
  .then(() => {
    app.listen(+PORT, HOST, () => {
      console.log(`Server is running on http://${HOST}:${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
    process.exit(1);
  });
