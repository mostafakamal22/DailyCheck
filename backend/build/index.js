"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var body_parser_1 = __importDefault(require("body-parser"));
var dotenv_1 = __importDefault(require("dotenv"));
var attendanceRoutes_1 = __importDefault(require("./routes/attendanceRoutes"));
var dbConfig_1 = require("./config/dbConfig");
dotenv_1.default.config();
var app = (0, express_1.default)();
app.use(body_parser_1.default.json());
app.get("/", function (req, res) {
    res.send("Hello World");
});
app.use("/api", attendanceRoutes_1.default);
//Connect to mongodb
(0, dbConfig_1.connectToMongoose)().then(function () {
    app.listen(process.env.PORT || 5000, function () {
        console.log("server is running");
    });
});
