import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import dbConnection from "./database/dbconnection.js";
import router from "./route/router.js";
import errorMiddleware from "./error/error.js"
const app = express();

dotenv.config({ path: "./config/config.env" });

app.use(
  cors({
    origin: [process.env.FORNTEND_URL],
    method: ["POST","GET"],
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api", router);
app.use("/getapi",router);
app.use(errorMiddleware);


dbConnection();

export default app;
